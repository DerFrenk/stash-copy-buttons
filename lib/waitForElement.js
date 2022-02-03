const items = new Map();
const observers = new Map();

function getObserver(selector) {
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var nodes = Array.from(mutation.addedNodes);
            for (var node of nodes) {
                if (node.matches && (node.matches(selector) || node.querySelector(selector))) {

                    // execute all callbacks
                    items.get(selector).forEach(callback => {
                        callback();
                    });

                    return;
                }
            }
        });
    });

    observer.observe(document.documentElement, {childList: true, subtree: true});
    return observer;
}

export default function waitForElement(elementSelector, callback) {
    let callbacks = [];
    if (items.has(elementSelector) === true) {
        callbacks = items.get(elementSelector);
    } else {
        observers.set(elementSelector, getObserver(elementSelector));
    }

    callbacks.push(callback);
    items.set(elementSelector, callbacks);

    if (document.querySelector(elementSelector) !== null) {
        callback();
    }
}