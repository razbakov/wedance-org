/**
 * Fires all 7 production email flows at a single inbox with realistic test data.
 * Usage: RESEND_API_KEY=... node scripts/send-test-emails.js [recipient]
 * Default recipient: kirill-dancer@ya.ru
 */
const {
  sendDeliveryEmail,
  sendNotifyConfirmEmail,
  sendBookingConfirmEmail,
  sendPaymentReceiptEmail,
  sendVisibilityWelcomeEmail,
  sendVideoReadyEmail,
  sendArchiveOfferEmail,
} = require('../server');

const to = process.argv[2] || 'kirill-dancer@ya.ru';

const flows = [
  { name: '1/7 Delivery', fn: () => sendDeliveryEmail({
      to,
      dancers: 'Kirill & Anya',
      festival: 'Berlin Bachata Week 2026',
      style: 'Bachata Sensual',
      session: 'Saturday Social',
      deliveryUrl: 'https://socialdancetv.com/delivery/TEST-delivery-001',
      previewThumb: null,
  }) },
  { name: '2/7 Notify confirm', fn: () => sendNotifyConfirmEmail({
      to,
      dancerName: 'Kirill',
      festival: 'Berlin Bachata Week 2026',
  }) },
  { name: '3/7 Booking confirm', fn: () => sendBookingConfirmEmail({
      to,
      name: 'Kirill',
      festival: 'Berlin Bachata Week 2026',
      pkg: 'Social + Show (2 videos)',
      day: 'Saturday, April 26',
      slot: '18:30',
      amount: 89,
  }) },
  { name: '4/7 Payment receipt', fn: () => sendPaymentReceiptEmail({
      to,
      amount: 8900,
      currency: 'EUR',
      description: 'SDTV Social Video — Berlin Bachata Week 2026',
      paymentId: 'pi_3ABcDeFgHiJkLmNoPqRsTuVw',
      date: new Date(),
  }) },
  { name: '5/7 Visibility welcome', fn: () => sendVisibilityWelcomeEmail({
      to,
      name: 'Kirill',
      plan: 'Visibility Monthly',
      instagram: 'kirill.dancer',
  }) },
  { name: '6/7 Video ready', fn: () => sendVideoReadyEmail({
      to,
      dancerName: 'Kirill',
      festival: 'Berlin Bachata Week 2026',
      deliveryUrl: 'https://socialdancetv.com/delivery/TEST-video-ready-001',
  }) },
  { name: '7/7 Archive offer', fn: () => sendArchiveOfferEmail({
      to,
      dancerName: 'Kirill',
      festival: 'Berlin Bachata Week',
      year: 2023,
      price: 25,
      currency: 'EUR',
      deliveryUrl: 'https://socialdancetv.com/archive/TEST-archive-001',
  }) },
];

(async () => {
  console.log(`Sending ${flows.length} test emails to ${to}\n`);
  for (const f of flows) {
    const t0 = Date.now();
    try {
      await f.fn();
      console.log(`  ${f.name.padEnd(26)} ✓ sent (${Date.now() - t0}ms)`);
    } catch (err) {
      console.error(`  ${f.name.padEnd(26)} ✗ ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 600));
  }
  console.log('\nAll 7 flows dispatched. Check inbox + spam.');
  process.exit(0);
})();
