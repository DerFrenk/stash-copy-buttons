import { chromium, FullConfig } from "@playwright/test";
import goToPullRequest from "../helpers/goToPullRequest";

export default async function globalTeardown(config: FullConfig) {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState: process.env.STATEFILE });
    const page = await context.newPage();
    await goToPullRequest(page);
    await page.click('[data-testid="more-actions--trigger"]');
    await page.click("//button[contains(.,'Delete')]");

    await page.click('[data-testid="delete-pull-request-modal-confirm-button"]');

    await browser.close();
}
