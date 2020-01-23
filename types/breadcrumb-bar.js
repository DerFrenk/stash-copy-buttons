import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink';

const dataAttribute = 'data-stash-copy-buttons-haslink';

window.setInterval(_ => {
    const breadcrumbs = document.querySelectorAll('.file-content .breadcrumbs:not([' + dataAttribute + ']');

    if (breadcrumbs.length > 0) {

        breadcrumbs.forEach(crumb => {
            const link = createCopyLink();
            link.classList.add(linkClassName + '--baseline');
            crumb.prepend(link);

            crumb.setAttribute(dataAttribute, true);

            link.addEventListener('click', _ => {
                const pathParts = [...crumb.querySelectorAll('.file-path span:not(.sep)')].map(pathNode => {
                    return pathNode.innerText;
                });

                pathParts.push(crumb.querySelector('.stub').innerText);

                copyToClipboard(link, pathParts.join('/'));
            });
        });
    }
}, 500);
