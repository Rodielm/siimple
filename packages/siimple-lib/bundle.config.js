const path = require("path");
const paths = require("../../config/paths.js");

module.exports = {
    "output": {
        "filename": "index.scss",
        "path": path.join(paths.dist, "siimple"),
    },
    "cwd": path.resolve(__dirname, "./scss"),
    "entry": [
        "./constants.scss",
        "./theme.scss",
        "./naming.scss",
        "./component.scss",
        "./sheet.scss",
        "./plugins.scss",
        "./build.scss",
    ],
    "resolve": {
        //"siimple-components": "./components.scss",
        "siimple-colors": "./colors.scss",
        "siimple-utils": "./utils.scss",
    },
};

