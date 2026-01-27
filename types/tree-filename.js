import { copyToClipboard } from "../lib/copyToClipboard";
import { linkClassName, createCopyLink } from "../lib/createCopyLink";
import waitForElement from "../lib/waitForElement";

// File tree in pull request

waitForElement(".changes-tree .root-directory", () => {
    document.querySelectorAll(".files .file > a:not([data-processed-by-stashcopybuttons]):not(.scb-Link)").forEach((file) => {
        file.setAttribute("data-processed-by-stashcopybuttons", "true");
        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        file.parentNode.prepend(link);

        link.addEventListener("click", (_) => {
            const path = decodeURIComponent(file.getAttribute("href").substring(1));
            copyToClipboard(link, path);
        });
    });
});
