import { Page } from "@playwright/test";

export default async function loginIfNecessary(page: Page) {
    const usernameElement = await page.$$("#j_username");
    if (usernameElement.length > 0) {
        await page.type("#j_username", process.env.USERNAME);
        await page.type("#j_password", process.env.P);
        await page.click('.aui [type="submit"]');
    }

    await page.waitForLoadState("domcontentloaded");
}
