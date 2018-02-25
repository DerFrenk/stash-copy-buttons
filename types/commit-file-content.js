import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink';

window.setInterval(_ => {
    const branchPopup = document.querySelector('#devstatus-branch-detail-dialog');

    if (branchPopup !== null && branchPopup.querySelector(`.${linkClassName}`) === null) {

        document.querySelectorAll('#devstatus-branch-detail-dialog .branch-link').forEach(item => {
            const link = createCopyLink();
            item.after(link);

            link.addEventListener('click', _ => {
                copyToClipboard(link, `git fetch && git checkout ${item.innerText} && git pull`);
            });
        });
    }
}, 500);
