import { copyToClipboard } from "../lib/copyToClipboard";
import { createCopyLink, linkClassName } from "../lib/createCopyLink";
import waitForElement from "../lib/waitForElement";
import { createCheckoutCommand } from "../lib/createCheckoutCommand";

waitForElement(".suggestion-text", () => {
    const prSuggestions = document.querySelectorAll(".suggestion-text a");

    prSuggestions.forEach((branch) => {
        const link = createCopyLink();
        link.classList.add(linkClassName + "--baseline");
        branch.after(link);

        link.addEventListener("click", (_) => {
            copyToClipboard(link, createCheckoutCommand(branch.textContent));
        });
    });
});
