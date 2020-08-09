import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink'

// Branch dropdown in commit view

const dropdown = document.querySelector('#repository-layout-revision-selector');
const branchActionsButton = document.querySelector('#branch-actions');

if (dropdown !== null && branchActionsButton !== null) {
    const link = createCopyLink();
    link.classList.add(linkClassName + '--baseline');
    branchActionsButton.after(link);

    link.addEventListener('click', _ => {
        copyToClipboard(link, `git fetch && git checkout ${dropdown.title} && git pull`);
    });
}
