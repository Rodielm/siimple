import React from "react";
import {htmlElement} from "../../../utils/reactElements.js";
import {classNames} from "../../../utils/classnames.js";
import {filterProps} from "../../../utils/reactProps.js";
import "./style.scss";

//Available positions
let drawerPositions = ["left", "right", "top", "bottom"];

//Export drawer component
export const Drawer = function (props) {
    let drawerProps = {
        "className": classNames(props.className, {
            "siimple__drawer": true,
            "siimple__drawer--visible": props.visible === true,
            "siimple__drawer--rounded": props.rounded === true
        }),
        "style": props.style
    };
    //Return the drawer wrapper
    return React.createElement("div", drawerProps, props.children);
};

//Drawer default props
Drawer.defaultProps = {
    "rounded": false,
    "visible": true
};

//Drawer background
export const DrawerBackground = htmlElement("div", "siimple__drawer-background");

//Drawer content
export const DrawerContent = function (props) {
    //Build the content props
    let contentProps = {
        "className": classNames(props.className, {
            "siimple__drawer-content": true,
            ["siimple__drawer-content--" + props.position]: drawerPositions.indexOf(props.position) !== -1
        }),
        "style": Object.assign({}, props.style, {
            "width": "100%",
            "height": "100%"
        })
    };
    //Check the content position
    if (props.position === "right" || props.position === "left") {
        contentProps.style.width = props.size;
    }
    else {
        contentProps.style.height = props.size;
    }
    //Return the drawer container
    return React.createElement("div", contentProps, props.children);
};

//Drawer content default props
DrawerContent.defaultProps = {
    "position": "right",
    "size": "400px",
    "style": null
};

