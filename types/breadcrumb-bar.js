import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink';

// Breadcrumb bar, file view in pull request

const breadcrumbs = document.querySelectorAll('.file-breadcrumbs');

breadcrumbs.forEach(crumb => {
    const link = createCopyLink();
    link.classList.add(linkClassName + '--baseline');
    crumb.prepend(link);

    link.addEventListener('click', () => {
        copyToClipboard(link, crumb.innerText);
    });
});
