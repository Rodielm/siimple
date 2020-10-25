import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Nav wrapper
export const Nav = function (props) {
    let newProps = filterProps(props, ["vertical", "tabs", "pills", "align", "className"]);
    newProps.className = classNames(props.className, {
        "siimple-nav": true,
        "siimple-nav--vertical": props.vertical,
        "siimple-nav--pills": props.pills,
        "siimple-nav--tabs": props.tabs,
        "siimple-nav--center": props.align === "center",
        "siimple-nav--right": props.align === "right"
    });
    //Return the nav element
    return React.createElement("div", newProps, props.children);
};

//Nav default props
Nav.defaultProps = {
    "tabs": false,
    "pills": false,
    "vertical": false,
    "align": "left"
};

//Nav item
export const NavItem = function (props) {
    let newProps = filterProps(props, ["active", "className"]);
    newProps.className = classNames(props.className, {
        "siimple-nav-item": true,
        "siimple-nav-item--active": props.active
    });
    //Return the nav item element
    return React.createElement("div", newProps, props.children);
};

//Nav item default props
NavItem.defaultProps = {
    "active": false
};

//Nav components
export const NavGroup = createHtmlElement("div", "siimple-nav-group");
export const NavDivider = createHtmlElement("div", "siimple-nav-divider");


