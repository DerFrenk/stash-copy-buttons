import waitForElement from "../lib/waitForElement";
import { createCopyLink, linkClassName } from "../lib/createCopyLink";
import { copyToClipboard } from "../lib/copyToClipboard";
import { createCheckoutCommand } from "../lib/createCheckoutCommand";

// File tree. Of cours this filetree uses different selectors than the one in the final pull request...
waitForElement(".file-tree-wrapper .difftree-file", () => {
    document.querySelectorAll(".difftree-file:not([data-processed-by-stashcopybuttons])").forEach((file) => {
        file.setAttribute("data-processed-by-stashcopybuttons", true);

        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        file.parentNode.prepend(link);

        link.addEventListener("click", (_) => {
            copyToClipboard(link, file.getAttribute("href").substring(1));
        });
    });
});

waitForElement("#commit-file-content .breadcrumbs", () => {
    document.querySelectorAll("#commit-file-content .breadcrumbs").forEach((crumb) => {
        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        crumb.prepend(link);

        link.addEventListener("click", () => {
            copyToClipboard(link, crumb.innerText);
        });
    });
});

waitForElement(".selector-toggle-button", () => {
    document.querySelectorAll(".selector-toggle-button").forEach((button) => {
        const link = createCopyLink();
        link.classList.add(linkClassName + "--inline");
        button.after(link);

        button.style.width = "calc(100% - 30px)";

        link.addEventListener("click", () => {
            const branchName = button.querySelector(".selector-toggle-button-content").innerText;
            copyToClipboard(link, createCheckoutCommand(branchName));
        });
    });
});
