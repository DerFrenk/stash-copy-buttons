import { test as base, BrowserContext, chromium } from "@playwright/test";

export const test = base.extend({
    context: async ({}, use) => {
        const context = await chromium.launchPersistentContext("", {
            headless: false,
            args: ["--disable-extensions-except=./", "--load-extension=./"],
            permissions: ["clipboard-read"],
        });
        await use(context);

        await context.close();
    },
});
