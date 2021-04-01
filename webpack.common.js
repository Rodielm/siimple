const path = require("path");
const paths = require("./paths.js");
const MiniCssExtract = require("mini-css-extract-plugin");

//Common loaders configuration
const styleLoaders = {
    // Extract CSS styles to a separate .css file
    "extract": {
        "loader": MiniCssExtract.loader,
        "options": {
            "publicPath": "./"
        }
    },
    // sass loader
    "sass": {
        "loader": "sass-loader",
        "options": {
            "sassOptions": {
                "includePaths": [
                    paths.dist,
                    paths.packages.folder
                ]
            },
            "implementation": require("sass")
        }
    },
    // Common CSS loader for parsing .css and compiled .scss files
    "css:default": {
        "loader": "css-loader"
    },
    "css:module": {
        "loader": "css-loader",
        "options": {
            "modules": {
                "mode": "local",
                "localIdentName": "siimple__[hash:base64:10]"
            }
        }
    }
};

//Get style loaders method
const getStyleLoaders = function (loadersList) {
    if (typeof loadersList === "string") {
        return styleLoaders[loadersList]; //Return only one loader
    }
    //Return a list of loaders
    return loadersList.map(function (name) {
        return styleLoaders[name]; //Get style loader
    });
};

//Get a file loader
const getFileLoader = function (options) {
    return Object.assign({
        "loader": "file-loader",
        "options": Object.assign(options, {
            "name": "[hash].[ext]"
        })
    });
};

//Generate the default configuration
const getDefaultConfig = function (options) {
    let env = options.env || {}; //Get env
    let staticPath = options.staticPath || "/static";
    return {
        "mode": env.NODE_ENV || "development",
        "target": "web",
        "output": {
            //"path": path.join(__dirname, "dist"),
            "path": paths.public,
            "publicPath": "/",
            "filename": path.join("./", staticPath, "js", `${options.name}-[name].[contenthash:9].js`),
            "chunkFilename": path.join("./", staticPath, "js", `${options.name}-[name].[contenthash:9].chunk.js`)
        },
        //"externals": {
        //    "react": "React",
        //    "react-dom": "ReactDOM"
        //},
        "resolve": {
            "modules": [
                paths.dist,
                paths.packages.folder, 
                paths.modules
            ]
        },
        "optimization": {
            "splitChunks": {
                "chunks": "all",
                "maxInitialRequests": 20,
                "maxAsyncRequests": 20,
                "name": function (module, chunks, cacheGroup) {
                    //return `${options.name}-vendor`;
                    return "vendor";
                }
            }
        },
        "module": {
            "rules": [{
                // Parse .scss files only on this module
                "test": /\.scss$/,
                "include": options.source,
                "use": getStyleLoaders(["extract", "css:module", "sass"])
            }, {
                // Parse .scss files from other modules
                "test": /\.scss$/,
                "exclude": options.source,
                "use": getStyleLoaders(["extract", "css:default", "sass"])
            }, {
                //Parse external css files
                "test": /\.css$/,
                "use": getStyleLoaders(["extract", "css:default"])
            }, {
                // Parse JSX using babel
                // BUT: ignore all .js files in node_modules and bower_components folders
                "test": /\.(js|jsx)$/,
                "include": [
                    options.source,
                    paths.packages.folder
                ],
                "exclude": /(node_modules|bower_components)/,
                "loader": "babel-loader",
                "options": {
                    "presets": [
                        "@babel/preset-env", 
                        "@babel/preset-react"
                    ],
                    "plugins": [
                        "@babel/plugin-transform-react-jsx"
                    ]
                }
            }]
        },
        "plugins": [
            new MiniCssExtract({
                "filename": path.join("./", staticPath, "css", "[name].[contenthash:8].css"),
                "chunkFilename": path.join("./", staticPath, "css", "[name].[contenthash:8].chunk.css")
            })
        ]
    };
};

//Exports
module.exports = {
    getDefaultConfig,
    getFileLoader
};


