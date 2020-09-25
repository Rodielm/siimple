let textarea = null; //To store textarea

//Fallback to copy text to clipboard
let fallbackCopyTextToClipboard = function (text) {
    //Check if textarea has not been initialized
    if (textarea === null) {
        textArea = document.createElement("textarea");
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
    }
    //Copy text to clipboard using the textarea
    return new Promise(function (resolve, reject) {
        textArea.value = text; //Update textarea content
        textArea.focus();
        textArea.select();
        //Try copying textarea content
        return resolve(document.execCommand("copy"));
        //document.body.removeChild(textArea);
    });
};

//Default copy text to clipboard wrapper
export function copyTextToClipboard (text) {
    //Check for no navigator available --> use custom fallback
    if (!navigator.clipboard) {
        return fallbackCopyToClipboard(text);
    }
    //Try to use the native solution
    return navigator.clipboard.writeText(text);
}

//Get text from clipboard
export function getTextFromClipboard () {
    return null;
}

