import React from "react";
import {createHtmlElement, createMergedElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";
import {classNames} from "../utils/classnames.js";

//Navbar default class
export const Navbar = function (props) {
    //Clone the navbar props 
    let newProps = filterProps(props, ["className", "color", "size", "fixedTop", "fixedBottom"]);
    //Generate navbar class-list
    let classList = ["siimple-navbar"];
    //Add navbar color
    if (typeof props.color === "string" && props.color !== "") {
        classList.push("is-" + props.color);
    }
    //Add navbar size
    if (typeof props.size === "string" && props.size !== "") {
        classList.push("is-" + props.size);
    }
    //Check if navbar is fixed top
    if (props.fixedTop === true) {
        classList.push("is-fixed-top");
    }
    //Check if navbar is fixed bottom
    if (props.fixedBottom === true) {
        classList.push("is-fixed-bottom");
    }
    //Generate classnames
    newProps.className = classNames(props.classNames, classList);
    //Render the navbar
    return React.createElement("div", newProps, props.children);
};

Navbar.defaultProps = {
    "color": "", 
    "size": "",
    "fixedTop": false,
    "fixedBottom": false
};

//Navbar brand element
export const NavbarBrand = createHtmlElement("div", "siimple-navbar-brand");
export const NavbarItem = createHtmlElement("div", "siimple-navbar-item");
export const NavbarContent = createHtmlElement("div", "siimple-navbar-content");

//Navbar toggle component
export const NavbarToggle = function (props) {
    return createMergedElement("div", props, {
        "className": "siimple-navbar-toggle",
        "tabIndex": "0"
    });
};

