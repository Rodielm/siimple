import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Breadcrumb parent component
export const Breadcrumb = createHtmlElement("div", "siimple-breadcrumb");

//Breadcrumb item component
export const BreadcrumbItem = function (props) {
    let newProps = filterProps(props, ["active", "className"]);
    newProps.className = classNames(props.className, {
        "siimple-breadcrumb-item": true,
        "siimple-breadcrumb-item--active": props.active === true
    });
    //Return the breadcrumb item
    return React.createElement("div", newProps, props.children);
};

BreadcrumbItem.defaultProps = {
    "active": false
};

