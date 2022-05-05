import waitForElement from "../lib/waitForElement";
import { createCopyLink, linkClassName } from "../lib/createCopyLink";
import { copyToClipboard } from "../lib/copyToClipboard";

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

waitForElement("#branch-compare .revision-reference-selector-trigger", () => {
    document.querySelectorAll("#branch-compare .revision-reference-selector-trigger").forEach((button) => {
        const link = createCopyLink();
        link.classList.add("aui-icon");

        const linkWrapper = document.createElement("div");
        linkWrapper.classList.add(linkClassName + "-wrapper");
        linkWrapper.appendChild(link);
        button.after(linkWrapper);

        link.addEventListener("click", () => {
            copyToClipboard(link, `git fetch && git checkout ${button.title} && git pull`);
        });
    });
});

waitForElement("#branch-compare .branch .name", () => {
    document.querySelectorAll("#branch-compare .branch .name").forEach((item) => {
        const link = createCopyLink();
        link.classList.add(linkClassName + "--inline");
        item.after(link);

        link.addEventListener("click", () => {
            copyToClipboard(link, `git fetch && git checkout ${item.innerHTML} && git pull`);
        });
    });
});
