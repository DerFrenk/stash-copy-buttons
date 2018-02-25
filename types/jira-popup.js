import {copyToClipboard} from '../lib/copyToClipboard';
import {linkClassName, createCopyLink} from '../lib/createCopyLink';

window.setInterval(_ => {
    const breadcrumbs = document.querySelector('#commit-file-content .breadcrumbs');

    if (breadcrumbs !== null && breadcrumbs.querySelector(`.${linkClassName}`) === null) {

        const link = createCopyLink();
        breadcrumbs.prepend(link);

        link.addEventListener('click', _ => {
            const pathParts = [...breadcrumbs.querySelectorAll('.file-path span:not(.sep)')].map(pathNode => {
                return pathNode.innerText;
            });

            pathParts.push(breadcrumbs.querySelector('.stub').innerText);

            copyToClipboard(link, pathParts.join('/'));
        });
    }
}, 500);
