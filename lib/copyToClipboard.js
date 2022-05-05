const textarea = document.createElement("textarea");
textarea.classList.add("scb-HiddenInput");

document.body.prepend(textarea);

export const copyToClipboard = (targetLink, textToCopy) => {
    textarea.value = textToCopy;
    textarea.focus();
    textarea.select();

    try {
        if (document.execCommand("copy") === true) {
            targetLink.dispatchEvent(new Event("success"));
        }
    } catch (error) {
        console.error("Could not copy text");
    }
};
