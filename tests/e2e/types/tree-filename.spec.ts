import { expect } from "@playwright/test";
import { test } from "../load-chrome.fixture";
import goToPullRequest from "../../helpers/goToPullRequest";

test("It should have a clickable button in the file tree", async ({ page }) => {
    await goToPullRequest(page);
    await page.click('[data-testid="tab-DIFF"] a');

    await page.click(".file-selected .scb-Link");

    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe("mapje/nogeenmapje/test.js");
});
