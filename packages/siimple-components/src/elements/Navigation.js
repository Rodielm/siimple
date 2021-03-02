import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Nav wrapper
export const Navigation = function (props) {
    let newProps = filterProps(props, ["vertical", "tabs", "pills", "align", "className", "filled"]);
    newProps.className = classNames(props.className, {
        "siimple-nav": true,
        "is-vertical": props.vertical,
        "is-pills": props.pills,
        "is-tabs": props.tabs,
        "is-center": props.align === "center",
        "is-right": props.align === "right",
        "is-filled": props.filled
    });
    //Return the nav element
    return React.createElement("div", newProps, props.children);
};

//Nav default props
Navigation.defaultProps = {
    "tabs": false,
    "pills": false,
    "vertical": false,
    "align": "left",
    "filled": false
};

//Navigation item
export const NavigationItem = function (props) {
    let newProps = filterProps(props, ["active", "className"]);
    newProps.className = classNames(props.className, {
        "siimple-nav-item": true,
        "is-active": props.active
    });
    //Return the nav item element
    return React.createElement("div", newProps, props.children);
};

//Nav item default props
NavigationItem.defaultProps = {
    "active": false
};

//Nav components
export const NavigationGroup = createHtmlElement("div", "siimple-nav-group");
export const NavigationDivider = createHtmlElement("div", "siimple-nav-divider");


