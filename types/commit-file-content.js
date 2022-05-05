import { copyToClipboard } from "../lib/copyToClipboard";
import { linkClassName, createCopyLink } from "../lib/createCopyLink";

// jira branch popup

window.setInterval(() => {
    const branchPopup = document.querySelector("#devstatus-branch-detail-dialog");

    if (branchPopup !== null && branchPopup.querySelector(`.${linkClassName}`) === null) {
        document.querySelectorAll("#devstatus-branch-detail-dialog .branch-link").forEach((item) => {
            const link = createCopyLink();
            link.classList.add(linkClassName + "--baseline");
            item.before(link);

            link.addEventListener("click", (_) => {
                copyToClipboard(link, `git fetch && git checkout ${item.innerText} && git pull`);
            });
        });
    }
}, 500);
