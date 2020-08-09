import {copyToClipboard} from '../lib/copyToClipboard';
import {createCopyLink, linkClassName} from '../lib/createCopyLink';

// branch name in Pull Request
const branchNames = document.querySelectorAll('.branch-lozenge-content');

branchNames.forEach(branch => {
    const link = createCopyLink();
    link.classList.add(linkClassName + '--baseline');
    branch.after(link);

    link.addEventListener('click', _ => {
        copyToClipboard(link, `git fetch && git checkout ${branch.textContent} && git pull`);
    });
});