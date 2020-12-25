let fs = require("fs");
let path = require("path");
let paths = require("../paths.js");
let template = require("./lib/template.js");
let virtualFile = require("./lib/virtual-file.js");
let util = require("./utils.js");
let buildPages = require("./website/pages.js");
let buildDocumentation = require("./website/documentation.js");

//Register handlebars partials
let registerPartials = function () {
    return util.walkdir(paths.websitePartials, [".html"], function (file) {
        let content = fs.readFileSync(path.join(paths.websitePartials, file), "utf8");
        return template.registerPartial(file, content);
    });
};

//Build layouts
let buildLayouts = function (config) {
    return fs.readdirSync(paths.websiteLayouts, "utf8").reduce(function (layouts, file) {
        if (path.extname(file) !== ".html") {
            return layouts; //Skip this file
        }
        //Register the layout template
        let layoutTemplate = template.page({
            "header": config.header,
            "body": fs.readFileSync(path.join(paths.websiteLayouts, file), "utf8")
        });
        return Object.assign(layouts, {[file]: layoutTemplate});
    }, {});
};

//Load icons data
let loadIconsData = function (data) {
    data["iconsList"] = util.readJSON(paths.icons.list); //path.join(paths.packages, "siimple-icons", "icons.json"));
    data["iconsCategories"] = {}; //util.readJSON(path.join(paths.packages, "siimple-icons", "categories.json"));
    //Sort icons by name
    data["iconsList"] = data["iconsList"].sort(function (a, b) {
        return (a.id < b.id) ? -1 : +1;
    });
    data["iconsList"].forEach(function (icon) {
        let name = icon.categories;
        if (typeof data["iconsCategories"][name] === "undefined") {
            data["iconsCategories"][name] = {
                "id": name,
                "name": name,
                "count": 0
            };
        }
        //Update the icons count
        let category = data["iconsCategories"][name];
        category.count = category.count + 1;
    });
};

//Load packages data
let loadPackagesData = function (data) {
    data["packages"] = {}; //Initialize packages data
    let packages = util.readJSON(paths.package).packages;
    packages.forEach(function (key) {
        let content = util.readJSON(path.join(paths.packages.folder, key, "package.json"));
        let name = key.replace("siimple-", ""); //Fix package name
        data["packages"][name] = {
            "name": content["name"],
            "version": content["version"],
            "description": content["description"]
        };
    });
};

//Build website pages
process.nextTick(function () {
    let config = util.readJSON(path.join(paths.website, "config.json")); //Import site config
    registerPartials(); //Register handlebars partials
    //Build data
    let data = {}; //Store global data object
    util.walkdir(paths.websiteData, [".json"], function (file) {
        let name = path.basename(file, ".json"); //Get data name
        data[name] = util.readJSON(path.join(paths.websiteData, file));
    });
    loadIconsData(data); //Load icons data
    loadPackagesData(data); //Load packages data
    let layouts = buildLayouts(config);
    //Build website content
    buildDocumentation(config, data, layouts);
    buildPages(config, data, layouts);
    //Write data into assets folder
    let outputAssets = {
        "iconsList": "icons-list.json", 
        "iconsCategories": "icons-categories.json"
    };
    Object.keys(outputAssets).forEach(function (key) {
        let outputPath = path.join(paths.public, "assets", outputAssets[key]);
        return fs.writeFileSync(outputPath, JSON.stringify(data[key]), "utf8");
    });
});

