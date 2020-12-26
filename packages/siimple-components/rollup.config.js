let path = require("path");
let paths = require("../../paths.js");
let {terser} = require("rollup-plugin-terser");
let cleanup = require("rollup-plugin-cleanup");
let {babel} = require("@rollup/plugin-babel");
let ignoreImport = require("rollup-plugin-ignore-import");

//Generate the banner
let banner = [];
banner.push("/*!*");
banner.push(" * This source code is licensed under the MIT license found in the");
banner.push(" * LICENSE file in the root directory of this source tree.");
banner.push(" */");
banner.push("");

//Output bundle extensions
let name = "siimple-components";
let outputBundleExtensions = ["umd", "umd.min", "esm", "esm.min"].map(function (ext) {
    return `${ext}.js`; //Add js extension
});

//Create the configuration for the main module
let createMainConfig = function (inputFile, outputFile, outputName) {
    //Initialize the configuration object
    let config = {
        "input": inputFile,
        "output": outputBundleExtensions.map(function (extname) {
            //Initialize the output object
            let output = {
                "format": extname.replace(".min.js", "").replace(".js", "") 
            };
            //Check for umd export
            if (output.format === "umd") {
                Object.assign(output, {"extend": true, "name": outputName});
            }
            //Check for minimized file
            if (extname.endsWith(".min.js") === true) {
                Object.assign(output, {"plugins": [terser()]});
            }
            //Assign other output configuration
            return Object.assign(output, {
                "file": path.join(paths.packages.neutrine, "dist", `${outputFile}.${extname}`),
                "globals": {"react": "React", "react-dom": "ReactDOM"},
                "banner": banner.join("\n")
            });
        }),
        "external": ["react", "react-dom"],
        "plugins": [
            ignoreImport({"extensions": [".scss", ".css"]}),
            cleanup()
        ]
    };
    //Return the configutation
    return config;
};

//Create the configuration for siimple-components
module.exports = {
    "input": path.join(paths.packages.folder, name, "src", "index.js"),
    "output": {
        "format": "umd",
        "file": path.join(paths.packages.folder, name, "dist", `${name}.js`),
        "globals": {"react": "React", "react-dom": "ReactDOM"},
        "extend": true,
        "name": "Siimple",
        "plugins": [terser()],
        "banner": banner.join("\n")
    },
    "external": ["react", "react-dom"],
    "plugins": [
        ignoreImport({"extensions": [".scss", ".css"]}),
        babel({"exclude": "node_modules/**"}),
        cleanup()
    ]
};

