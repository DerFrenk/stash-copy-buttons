import { test } from "../load-chrome.fixture";
import { expect } from "@playwright/test";
import loginIfNecessary from "../../helpers/loginIfNecessary";

const { createCheckoutCommand } = require("../../../lib/createCheckoutCommand");

test("It must have a working button next to the branch dropdown in the commit view", async ({ page }) => {
    await page.goto(`${process.env.DOMAIN}/users/frank/repos/stash-copy-buttons-e2e/commits`);
    await loginIfNecessary(page);
    await page.click(".scb-Link");

    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe(createCheckoutCommand("main"));
});

test("It must contain the right branch name after switching branch", async ({ page }) => {
    await page.goto(`${process.env.DOMAIN}/users/frank/repos/stash-copy-buttons-e2e/commits`);
    await loginIfNecessary(page);

    await page.click("#repository-layout-revision-selector");
    await page.click('[data-id="refs/heads/feature/zeer-zieke-sidebranch"]');
    await page.click(".scb-Link");
    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe(createCheckoutCommand("feature/zeer-zieke-sidebranch"));
});
