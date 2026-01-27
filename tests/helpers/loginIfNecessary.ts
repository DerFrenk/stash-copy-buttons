import { Page } from "@playwright/test";

export default async function loginIfNecessary(page: Page) {
    await page.waitForLoadState("domcontentloaded");

    if (!page.url().includes("/login")) {
        return;
    }

    const credentials = JSON.parse(process.env.DATA!);
    await page.fill("#username-field", credentials[0].value);
    await page.fill("#password-field", credentials[1].value);
    await page.press("#password-field", "Enter");
    await page.waitForLoadState("domcontentloaded");
}
