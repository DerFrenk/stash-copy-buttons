import {copyToClipboard} from '../lib/copyToClipboard';
import {createCopyLink} from '../lib/createCopyLink';

document.querySelectorAll('.ref-name-from').forEach(item => {
    const link = createCopyLink();
    item.after(link);

    link.addEventListener('click', _ => {
        copyToClipboard(link, `git fetch && git checkout ${item.querySelector('.branch-name').innerText} && git pull`);
    });
});
