import { Page } from "@playwright/test";

export default async function loginIfNecessary(page: Page) {
    const usernameElement = await page.$$("#j_username");
    if (usernameElement.length > 0) {
        await page.type("#j_username", JSON.parse(process.env.DATA)[0].value);
        await page.type("#j_password", JSON.parse(process.env.DATA)[1].value);
        await page.click('.aui [type="submit"]');
    }

    await page.waitForLoadState("domcontentloaded");
}
