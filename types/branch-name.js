import { copyToClipboard } from "../lib/copyToClipboard";
import { createCopyLink, linkClassName } from "../lib/createCopyLink";
import waitForElement from "../lib/waitForElement";
import { createCheckoutCommand } from "../lib/createCheckoutCommand";

// branch name in Pull Request

waitForElement(".pull-request-header-bar", () => {
    const branchNames = document.querySelectorAll(".ref-lozenge-content");

    branchNames.forEach((branch) => {
        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        branch.after(link);

        link.addEventListener("click", (_) => {
            copyToClipboard(link, createCheckoutCommand(branch.textContent));
        });
    });
});
