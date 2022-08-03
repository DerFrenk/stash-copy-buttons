import { expect } from "@playwright/test";
import { test } from "../load-chrome.fixture";
import loginIfNecessary from "../../helpers/loginIfNecessary";

const { createCheckoutCommand } = require("../../../lib/createCheckoutCommand");

test("should have a working button next to the source branch dropdown", async ({ page }) => {
    await page.goto(`${process.env.DOMAIN}/users/frank/repos/stash-copy-buttons-e2e/pull-requests?create`);
    await loginIfNecessary(page);

    await page.click(".source-selector .selector-toggle-button");
    await page.click('[data-test-value="refs/heads/feature/zeer-zieke-sidebranch"] .filterable-tabs__option');
    await page.click(".source-selector .scb-Link");

    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe(createCheckoutCommand("feature/zeer-zieke-sidebranch"));
});
