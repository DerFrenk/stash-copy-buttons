import svg from "../assets/copy.svg";

const linkClassName = "scb-Link";
const activeClassName = linkClassName + "--active";

export { linkClassName };

export const createCopyLink = () => {
    const link = document.createElement("a");
    link.innerHTML = svg;
    link.classList.add(linkClassName);

    link.addEventListener("success", () => {
        link.classList.add(activeClassName);

        setTimeout((_) => {
            link.classList.remove(activeClassName);
        }, 500);
    });

    return link;
};
