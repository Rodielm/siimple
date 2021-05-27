const path = require("path");
const colors = require("./colors.json");

//Generate colors file
const generateColorsVirtualFile = function () {
    const content = [];
    const colorsList = []; //Colors list
    Object.keys(colors).forEach(function (colorName) {
        return Object.keys(colors[colorName]).forEach(function (colorIndex) {
            return colorsList.push({
                "index": `${colorName}-${colorIndex}`,
                "value": colors[colorName][colorIndex]
            });
        });
    });
    content.push("$list: (");
    colorsList.forEach(function (color, index) {
        const sep = (index === colorsList.length - 1) ? "" : ","; //Separator
        return content.push(`    "${color.index}": ${color.value}${sep}`);
    });
    //content.push(") !default;");
    content.push(");");
    return content.join("\n");
};

module.exports = {
    "cwd": path.resolve(__dirname, "./src"),
    "entry": [
        "./colors.scss",
        "./functions.scss"
    ],
    "resolve": {
        "siimple-lib": "./lib.scss"
    },
    "virtualFiles": {
        "./colors.scss": generateColorsVirtualFile()
    }
};

