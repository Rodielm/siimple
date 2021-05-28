const fs = require("fs");
const path = require("path");
const glob = require("glob");
const getArgs = require("get-args");
const generateBanner = require("./banner.js");

//Parse entry files
const getEntryFiles = function (entry, options) {
    if (typeof entry === "string") {
        entry = [entry];
    }
    //Build for each entry
    return entry.map(function (entryPath) {
        return glob.sync(entryPath, options);
    }).flat(2);
};

//Generate modules forward
const generateForwards = function () {
    const modulesForwards = [
        `@forward "./lib.scss";`,
        `//@forward "./colors.scss";`,
        `//@forward "./icons.scss";`
    ];
    //Return joined forwards
    return modulesForwards.join("\n");
};

//Generate modules imports
const generateImports = function () {
    let modulesImports = [
        `@use "./lib.scss" as lib;`,
        `@use "./modules.scss" as modules;`
    ];
    //allModules.forEach(function (name) {
    //    return modulesImports.push(`@use "./${name}.scss" as ${name};`);
    //});
    //Return joined list of imports
    return modulesImports.join("\n");
};

//Generate list of modules and mixins
const generateLoaders = function (config, cwd) {
    const loaders = getEntryFiles(config.entry, {"cwd": cwd}).map(function (file) {
        //console.log(file);
        const name = path.normalize(file).replace(".scss", "").replace("/", ".");
        const mixin = `modules.load-${name.replace(".", "-")}`;
        const content = [
            `// @module ${name}`,
            `@if lib.is-module-enabled("${name}") {`,
            `    @include ${mixin}($options: lib.get-module-options("${name}"));`,
            `}`
        ];
        //Save the loader call
        return content.join("\n");
    });
    //Return the loaders
    return loaders.join("\n");
};

//Start modules bundlerize
process.nextTick(function () {
    const options = getArgs().options || {};
    const configPath = path.resolve(process.cwd(), options.config);
    const config = require(configPath);
    const cwd = config.cwd || path.dirname(configPath);
    const scss = [
        generateBanner(),
        generateForwards(),
        generateImports(),
        generateLoaders(config, cwd)
    ].join("\n");
    //Print content to a file
    if (typeof options["output"] !== "undefined") {
        const outputPath = path.resolve(process.cwd(), options["output"]);
        return fs.writeFileSync(outputPath, scss, "utf8");
    }
    //No output option provided --> print to stdout
    console.log(scss);
});

