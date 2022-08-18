import loginIfNecessary from "../../helpers/loginIfNecessary";
import { test } from "../load-chrome.fixture";
import { expect } from "@playwright/test";
const { createCheckoutCommand } = require("../../../lib/createCheckoutCommand");

test("Shows button in the Jira branch popup", async ({ page }) => {
    const ticketNumber = "TUD-717";

    await page.goto(`${process.env.JIRADOMAIN}/browse/${ticketNumber}`);
    await page.type("#login-form-username", JSON.parse(process.env.DATA)[0].value);
    await page.type("#login-form-password", JSON.parse(process.env.DATA)[1].value);
    await page.click("#login-form-submit");

    await page.click(`[title="Branches related to ${ticketNumber}"]`);

    await page.click(".scb-Link");

    const clipboard = await page.evaluate(`(async () => await navigator.clipboard.readText())()`);
    expect(clipboard).toBe(createCheckoutCommand("feature/TUD-717-publicaties-importeren"));
});
