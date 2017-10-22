import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink';

window.setInterval(_ => {
    const jsTree = document.querySelector('.jstree-leaf');

    if (jsTree !== null && jsTree.querySelector(`.${linkClassName}`) === null) {
        document.querySelectorAll('.jstree-leaf').forEach(leaf => {
            const link = createCopyLink();
            link.classList.add(linkClassName + '--absoluteLeft');
            leaf.prepend(link);

            link.addEventListener('click', _ => {
                copyToClipboard(link, leaf.querySelector('.difftree-file').href.split('#')[1]);
            });
        });
    }
}, 500);
