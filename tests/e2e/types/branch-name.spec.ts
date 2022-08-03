import goToPullRequest from "../../helpers/goToPullRequest";

const { createCheckoutCommand } = require("../../../lib/createCheckoutCommand");
import { test } from "../load-chrome.fixture";
import { expect } from "@playwright/test";

test("should have a button for the source branch and for the destination branch", async ({ page }) => {
    await goToPullRequest(page);
    await page.waitForSelector(".scb-Link");

    const links = await page.$$(".pull-request-header-bar .scb-Link");

    expect(links.length).toBe(2);

    await links[0].click();
    let clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe(createCheckoutCommand("feature/zeer-zieke-sidebranch"));

    await links[1].click();
    clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe(createCheckoutCommand("main"));
});
