import { copyToClipboard } from "../lib/copyToClipboard";
import { createCopyLink, linkClassName } from "../lib/createCopyLink";
import { createCheckoutCommand } from "../lib/createCheckoutCommand";

// Branch dropdown in commit view

const dropdown = document.querySelector("#repository-layout-revision-selector");
const branchActionsButton = document.querySelector("#branch-actions");

if (dropdown !== null && branchActionsButton !== null) {
    const link = createCopyLink();
    link.classList.add(linkClassName + "--fullHeight");

    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add(linkClassName + "-wrapper");
    linkWrapper.appendChild(link);

    branchActionsButton.after(linkWrapper);

    link.addEventListener("click", (_) => {
        copyToClipboard(link, createCheckoutCommand(dropdown.title));
    });
}
