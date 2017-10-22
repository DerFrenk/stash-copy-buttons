import {createCopyLink} from '../lib/createCopyLink';
import {copyToClipboard} from '../lib/copyToClipboard';

const dropdown = document.querySelector('#repository-layout-revision-selector');
const branchActionsButton = document.querySelector('#branch-actions');

if (dropdown !== null && branchActionsButton !== null) {
    const link = createCopyLink();
    branchActionsButton.after(link);

    link.addEventListener('click', _ => {
        copyToClipboard(link, `git fetch && git checkout ${dropdown.title} && git pull`);
    });
}
