/**
 * SDTV Email Service — Resend wrapper
 *
 * Replaces Gmail SMTP / nodemailer.
 * Custom domain DNS configured for socialdancetv.com.
 *
 * Env vars:
 *   RESEND_API_KEY   — from https://resend.com/api-keys (required)
 *   EMAIL_FROM       — default sender, e.g. '"Social Dance TV" <pr@socialdancetv.com>'
 *   EMAIL_REPLY_TO   — default reply-to, e.g. 'pr@socialdancetv.com'
 *   EMAIL_DISABLED   — set to '1' to disable sending (dev/test)
 *
 * Usage:
 *   const { sendEmail, isEmailReady } = require('./lib/email');
 *   await sendEmail({ to, subject, html });
 *   await sendEmail({ to, subject, html, from: '"SDTV Production" <pr@socialdancetv.com>' });
 */

const { Resend } = require('resend');

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || '"Social Dance TV" <pr@socialdancetv.com>';
const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO || 'pr@socialdancetv.com';
const EMAIL_DISABLED = process.env.EMAIL_DISABLED === '1';

let client = null;
if (RESEND_API_KEY && !EMAIL_DISABLED) {
  client = new Resend(RESEND_API_KEY);
  console.log('Email initialized (Resend):', EMAIL_FROM);
} else if (EMAIL_DISABLED) {
  console.warn('EMAIL_DISABLED=1 — email sending turned off');
} else {
  console.warn('RESEND_API_KEY not set — email sending disabled');
}

function isEmailReady() {
  return !!client;
}

/**
 * Send an email via Resend.
 * @param {object} opts
 * @param {string|string[]} opts.to   — recipient(s)
 * @param {string} opts.subject
 * @param {string} opts.html          — full HTML body
 * @param {string} [opts.text]        — optional plaintext fallback
 * @param {string} [opts.from]        — override default From
 * @param {string} [opts.replyTo]     — override default Reply-To
 * @param {object[]} [opts.attachments] — Resend attachments format
 * @returns {Promise<{ok: boolean, id?: string, error?: string}>}
 */
async function sendEmail({ to, subject, html, text, from, replyTo, attachments }) {
  if (!client) {
    console.warn('sendEmail skipped — Resend not configured');
    return { ok: false, error: 'not_configured' };
  }
  if (!to || !subject || !html) {
    return { ok: false, error: 'missing_required_fields' };
  }

  try {
    const payload = {
      from: from || EMAIL_FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      replyTo: replyTo || EMAIL_REPLY_TO,
    };
    if (text) payload.text = text;
    if (attachments && attachments.length) payload.attachments = attachments;

    const { data, error } = await client.emails.send(payload);
    if (error) {
      console.error('Resend send error:', error.message || error);
      return { ok: false, error: error.message || String(error) };
    }
    return { ok: true, id: data && data.id };
  } catch (err) {
    console.error('Resend send exception:', err.message);
    return { ok: false, error: err.message };
  }
}

module.exports = { sendEmail, isEmailReady, EMAIL_FROM, EMAIL_REPLY_TO };
