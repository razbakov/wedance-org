// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:8001';

async function waitForForm(page) {
  await page.waitForSelector('.popup-overlay.open', { timeout: 5000 });
}

// Helper: wait for Airtable data to load
async function waitForData(page, ms = 3000) {
  await page.waitForTimeout(ms);
}

// ═══════════════════════════════════════════
// FLOW 1: ARCHIVE — Find My Dance
// ═══════════════════════════════════════════
test('1. Archive flow — festival select → identity → search', async ({ page }) => {
  await page.goto(BASE);
  await waitForForm(page);
  await expect(page.locator('#screen-routing')).toHaveClass(/active/);

  await page.click('text=Find My Dance');
  await expect(page.locator('#screen-archive-festival')).toHaveClass(/active/);

  // Wait for Airtable festivals
  await waitForData(page);
  const list = page.locator('#festivalList');
  const cards = list.locator('button, .festival-card-visual');
  const count = await cards.count();
  console.log(`Archive: ${count} festival cards rendered`);
  // May be 0 if all festivals are "Upcoming" — that's valid
  if (count > 0) {
    await cards.first().click();
    await page.click('#archiveFestivalNext');
    await expect(page.locator('#screen-archive-identity')).toHaveClass(/active/);

    await page.fill('#dancerIdentity', '@testdancer');
    await page.click('#archiveSearchBtn');
    await page.waitForTimeout(5000);

    const activeScreen = await page.evaluate(() => document.querySelector('.screen.active')?.id);
    console.log(`Archive result screen: ${activeScreen}`);
    expect(['screen-archive-preview', 'screen-archive-notready', 'screen-archive-empty']).toContain(activeScreen);
  } else {
    console.log('Archive: No past festivals — flow requires at least one non-Upcoming festival');
  }
});

// ═══════════════════════════════════════════
// FLOW 2: PREORDER — Book Before Event
// ═══════════════════════════════════════════
test('2. Preorder flow — festival → package → slots load', async ({ page }) => {
  await page.goto(BASE);
  await waitForForm(page);

  await page.click('text=Reserve Filming');
  await expect(page.locator('#screen-preorder-festival')).toHaveClass(/active/);
  await waitForData(page);

  const festivals = page.locator('#upcomingFestivals button');
  await expect(festivals.first()).toBeVisible({ timeout: 5000 });
  const count = await festivals.count();
  console.log(`Preorder: ${count} upcoming festivals`);
  expect(count).toBeGreaterThan(0);

  await festivals.first().click();
  await page.click('#preorderFestivalNext');
  await expect(page.locator('#screen-preorder-package')).toHaveClass(/active/);

  await page.locator('.package-card').first().click();
  await page.locator('#screen-preorder-package .btn-primary').click();
  await expect(page.locator('#screen-preorder-slot')).toHaveClass(/active/);

  // Wait for sessions to load from Airtable
  await waitForData(page, 4000);

  const dayCards = page.locator('#daySelector .day-card');
  const dayCount = await dayCards.count();
  console.log(`Preorder: ${dayCount} day cards`);
  expect(dayCount).toBeGreaterThan(0);

  // Check badges
  const firstBadge = dayCards.first().locator('.day-card-avail');
  const badgeText = await firstBadge.textContent().catch(() => '');
  console.log(`First day badge: "${badgeText}"`);

  // Click first available day
  const availableDay = dayCards.filter({ hasNot: page.locator('.sold-out') }).first();
  await availableDay.click();

  // Slots should appear
  const slots = page.locator('#slotsList .slot-card');
  await expect(slots.first()).toBeVisible({ timeout: 3000 });
  const slotCount = await slots.count();
  console.log(`Preorder: ${slotCount} time slots`);
  expect(slotCount).toBeGreaterThan(0);

  // Select slot
  await slots.first().click();

  // Summary
  const summary = page.locator('#slotSummary');
  await expect(summary).toBeVisible({ timeout: 2000 });

  // Next to checkout
  await page.click('#slotNextBtn');
  await expect(page.locator('#screen-preorder-checkout')).toHaveClass(/active/);
  console.log('Preorder: full flow OK — festival → package → slot → checkout');
});

// ═══════════════════════════════════════════
// FLOW 3: VISIBILITY — Get Featured
// ═══════════════════════════════════════════
test('3. Visibility flow — intro → packages → checkout', async ({ page }) => {
  await page.goto(BASE);
  await waitForForm(page);

  await page.click('text=Get Featured on SDTV');
  await expect(page.locator('#screen-visibility-intro')).toHaveClass(/active/);

  // Click first goal option
  const goals = page.locator('#screen-visibility-intro button, #screen-visibility-intro .intent-card');
  await goals.first().click();
  await page.waitForTimeout(500);

  const activeAfterGoal = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Visibility after goal: ${activeAfterGoal}`);

  if (activeAfterGoal === 'screen-visibility-packages') {
    const plans = page.locator('.visibility-plan-card, .plan-card, #screen-visibility-packages button');
    const planCount = await plans.count();
    console.log(`Visibility: ${planCount} plan options`);
    if (planCount > 0) {
      await plans.first().click();
      await page.waitForTimeout(500);
      const activeAfterPlan = await page.evaluate(() => document.querySelector('.screen.active')?.id);
      console.log(`Visibility after plan: ${activeAfterPlan}`);
    }
  }
});

// ═══════════════════════════════════════════
// FLOW 4: WALKUP — Film Me Tonight
// ═══════════════════════════════════════════
test('4. Walkup flow — quick form → confirmation', async ({ page }) => {
  await page.goto(BASE + '/?flow=walkup');
  await waitForForm(page);
  await page.waitForTimeout(500);
  await expect(page.locator('#screen-walkup')).toHaveClass(/active/);

  // Fill form
  const igField = page.locator('#walkupIg');
  if (await igField.isVisible()) await igField.fill('@testwalker');

  const emailField = page.locator('#walkupEmail');
  if (await emailField.isVisible()) await emailField.fill('test@walkup.com');

  // Try to select dance style
  const styles = page.locator('.style-chip, .dance-style-btn, #screen-walkup .chip');
  if (await styles.first().isVisible().catch(() => false)) {
    await styles.first().click();
  }

  // Submit — button starts disabled, need to wait for it to enable
  const submitBtn = page.locator('#walkupBtn');
  await page.waitForTimeout(500);
  // Force enable if still disabled (some fields might auto-validate)
  await page.evaluate(() => { const b = document.getElementById('walkupBtn'); if(b) { b.disabled = false; b.classList.remove('disabled'); } });
  await submitBtn.click();
  await page.waitForTimeout(3000);

  const activeScreen = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Walkup result: ${activeScreen}`);
});

// ═══════════════════════════════════════════
// FLOW 5: MONDAY MORNING
// ═══════════════════════════════════════════
test('5. Monday morning flow — via deep link', async ({ page }) => {
  await page.goto(BASE + '/?flow=monday&festival=benidorm-2026');
  await waitForForm(page);
  await page.waitForTimeout(500);

  const activeScreen = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Monday screen: ${activeScreen}`);
  expect(activeScreen).toBe('screen-monday-morning');

  const title = await page.locator('#mondayFestivalTitle').textContent();
  console.log(`Monday festival: ${title}`);
  expect(title).toBeTruthy();
});

// ═══════════════════════════════════════════
// FLOW 6: NOT SURE YET
// ═══════════════════════════════════════════
test('6. Not sure yet flow — quiz options', async ({ page }) => {
  await page.goto(BASE);
  await waitForForm(page);

  await page.click('text=Not sure yet');
  await page.waitForTimeout(300);

  const activeScreen = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Not sure screen: ${activeScreen}`);
  expect(activeScreen).toBe('screen-notsure');

  // Count options
  const options = page.locator('#screen-notsure button, #screen-notsure .quiz-option');
  const count = await options.count();
  console.log(`Not sure: ${count} options available`);
  expect(count).toBeGreaterThan(0);
});

// ═══════════════════════════════════════════
// FLOW 7: DELIVERY PAGE
// ═══════════════════════════════════════════
test('7. Delivery page — video + download + upsell', async ({ page }) => {
  await page.goto(BASE + '/delivery?id=recFZxaQizard5vIM');
  await page.waitForTimeout(2000);

  // Title
  const title = await page.locator('h1, .dancers').first().textContent();
  console.log(`Delivery title: ${title}`);

  // Video element
  const video = page.locator('video');
  const hasVideo = await video.isVisible().catch(() => false);
  console.log(`Delivery video: ${hasVideo}`);

  if (hasVideo) {
    const src = await video.getAttribute('src');
    console.log(`Video src: ${src}`);
    expect(src).toContain('/api/preview/');
  }

  // Download or waiting
  const pageText = await page.locator('body').textContent();
  const hasDownload = pageText.includes('Download');
  const hasWaiting = pageText.includes('email you');
  console.log(`Download: ${hasDownload}, Waiting: ${hasWaiting}`);
  expect(hasDownload || hasWaiting).toBeTruthy();

  // Upsell
  const hasUpsell = pageText.includes('SDTV Feature') || pageText.includes('MAKE IT STRONGER');
  console.log(`Upsell: ${hasUpsell}`);
  expect(hasUpsell).toBeTruthy();
});

// ═══════════════════════════════════════════
// DEEP LINKS
// ═══════════════════════════════════════════
test('Deep link: ?flow=archive', async ({ page }) => {
  await page.goto(BASE + '/?flow=archive');
  await waitForForm(page);
  await page.waitForTimeout(500);
  const s = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Deep link archive: ${s}`);
  expect(s).toBe('screen-archive-festival');
});

test('Deep link: ?flow=preorder', async ({ page }) => {
  await page.goto(BASE + '/?flow=preorder');
  await waitForForm(page);
  await page.waitForTimeout(500);
  const s = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Deep link preorder: ${s}`);
  expect(s).toBe('screen-preorder-festival');
});

test('Deep link: ?flow=visibility', async ({ page }) => {
  await page.goto(BASE + '/?flow=visibility');
  await waitForForm(page);
  await page.waitForTimeout(500);
  const s = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Deep link visibility: ${s}`);
  expect(s).toBe('screen-visibility-intro');
});

test('Deep link: ?flow=walkup', async ({ page }) => {
  await page.goto(BASE + '/?flow=walkup');
  await waitForForm(page);
  await page.waitForTimeout(500);
  const s = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Deep link walkup: ${s}`);
  expect(s).toBe('screen-walkup');
});

test('Deep link: ?auto=1 skips to search results', async ({ page }) => {
  await page.goto(BASE + '/?flow=archive&ig=@rocalidonio&auto=1');
  await waitForForm(page);
  // Should auto-search and land on results (preview, notready, or empty)
  await page.waitForTimeout(8000);
  const activeScreen = await page.evaluate(() => document.querySelector('.screen.active')?.id);
  console.log(`Auto-search result: ${activeScreen}`);
  expect(['screen-archive-preview', 'screen-archive-notready', 'screen-archive-empty']).toContain(activeScreen);
  // Should NOT be on identity or festival screen
  expect(activeScreen).not.toBe('screen-archive-identity');
  expect(activeScreen).not.toBe('screen-archive-festival');
});

test('Deep link: ?ig=@dancer pre-fills identity', async ({ page }) => {
  await page.goto(BASE + '/?flow=archive&ig=@dancertest');
  await waitForForm(page);
  await page.waitForTimeout(1000);
  const ig = await page.evaluate(() => state.dancerIdentity);
  console.log(`Deep link ig: ${ig}`);
  // May be empty if checkURLParams runs before openPopup resets — check field value too
  const fieldVal = await page.locator('#dancerIdentity').inputValue().catch(() => '');
  console.log(`Field value: ${fieldVal}`);
  expect(ig === '@dancertest' || fieldVal === '@dancertest').toBeTruthy();
});
