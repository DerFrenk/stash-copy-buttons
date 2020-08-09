import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink';

// File tree in pull request

document.querySelectorAll('.files .file > a').forEach(file => {
    const link = createCopyLink();
    link.classList.add(linkClassName + '--baseline');
    file.parentNode.prepend(link);

    link.addEventListener('click', _ => {
        copyToClipboard(link, file.getAttribute('href').substring(1));
    });
});
