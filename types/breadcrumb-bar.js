import { copyToClipboard } from "../lib/copyToClipboard";
import { linkClassName, createCopyLink } from "../lib/createCopyLink";
import waitForElement from "../lib/waitForElement";

// Breadcrumb bar, file view in pull request
// Also used in comments on the pull request overview page

waitForElement(".file-breadcrumbs", () => {
    const breadcrumbs = document.querySelectorAll(".file-breadcrumbs:not([data-processed-by-stashcopybuttons])");

    breadcrumbs.forEach((crumb) => {
        crumb.setAttribute("data-processed-by-stashcopybuttons", true);

        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        crumb.prepend(link);

        link.addEventListener("click", () => {
            copyToClipboard(link, crumb.innerText);
        });
    });
});
