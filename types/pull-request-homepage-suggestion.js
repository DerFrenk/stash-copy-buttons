import { copyToClipboard } from "../lib/copyToClipboard";
import { createCopyLink, linkClassName } from "../lib/createCopyLink";
import waitForElement from "../lib/waitForElement";

waitForElement(".suggestion-text", () => {
    const prSuggestions = document.querySelectorAll(".suggestion-text a");

    prSuggestions.forEach((branch) => {
        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        branch.after(link);

        link.addEventListener("click", (_) => {
            copyToClipboard(link, `git fetch && git checkout ${branch.textContent} && git pull`);
        });
    });
});
