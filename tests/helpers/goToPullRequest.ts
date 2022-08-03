import loginIfNecessary from "./loginIfNecessary";

export default async function goToPullRequest(page) {
    await page.goto(`${process.env.DOMAIN}/users/frank/repos/stash-copy-buttons-e2e/pull-requests`);
    await loginIfNecessary(page);
    await page.click(".pull-requests-table tbody tr:first-child .pull-request-title");
}
