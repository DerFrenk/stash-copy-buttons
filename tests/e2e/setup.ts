import { existsSync } from "fs";
import { chromium, FullConfig } from "@playwright/test";
import loginIfNecessary from "../helpers/loginIfNecessary";
require("dotenv").config();

export default async function globalSetup(config: FullConfig) {
    let contextOptions = {};
    if (existsSync(process.env.STATEFILE)) {
        contextOptions = { storageState: process.env.STATEFILE };
    }

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();
    await page.goto(`${process.env.DOMAIN}/users/frank/repos/stash-copy-buttons-e2e/`);
    await loginIfNecessary(page);

    await page.goto(`${process.env.DOMAIN}/users/frank/repos/stash-copy-buttons-e2e/pull-requests?create`);
    await page.click(".source-selector .selector-toggle-button");
    await page.click('[data-test-value="refs/heads/feature/zeer-zieke-sidebranch"] .filterable-tabs__option');
    await page.click(".continue-button:not(:disabled)");
    await page.click(".create-button");

    // Add a comment
    await page.click('[data-testid="tab-DIFF"] a');
    await page.click('[data-testid="diff-comment-trigger"]');
    await page.evaluate(() => {
        document.execCommand("insertText", false, "Yolo");
    });
    await page.click('[data-testid="comment-editor-submit-button"]', { delay: 500 });

    await page.context().storageState({ path: process.env.STATEFILE });
    await browser.close();
}
