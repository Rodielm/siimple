const path = require("path");
const icons = require("./icons.json");

//Unicode parser
const parseUnicode = function (value) {
    return value.toString(16).toLowerCase();
};

//Generate icons file
const generateIconsVirtualFile = function () {
    const content = [];
    content.push("$list: (");
    icons.forEach(function (item, index) {
        const sep = (index === icons.length - 1) ? "" : ","; //Separator
        content.push(`    "${item.id}": "${parseUnicode(item.unicode)}"${sep}`);
    });
    //content.push(") !default;");
    content.push(");");
    //Return the file content
    return content.join("\n");
};

module.exports = {
    "cwd": path.resolve(__dirname, "./src"),
    "entry": [
        "./icons.scss",
        "./functions.scss"
    ],
    "resolve": {
        "siimple-lib": "./lib.scss"
    },
    "virtualFiles": {
        "./icons.scss": generateIconsVirtualFile()
    }
};

