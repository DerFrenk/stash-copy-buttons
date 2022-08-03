import goToPullRequest from "../../helpers/goToPullRequest";
import { expect } from "@playwright/test";
import { test } from "../load-chrome.fixture";

test("should have a clickable breadcrumb on the pull request overview page", async ({ page }) => {
    await goToPullRequest(page);
    await page.click(".file-breadcrumbs .scb-Link");

    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe("mapje/nogeenmapje/test.js");
});

test("should have a clickable breadcrumb bar on a pull request file view", async ({ page }) => {
    await goToPullRequest(page);
    await page.click('[data-testid="tab-DIFF"] a');
    await page.waitForSelector(".file-breadcrumbs");

    await page.click(".file-breadcrumbs .scb-Link");

    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe("mapje/nogeenmapje/test.js");
});
