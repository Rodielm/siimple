import React from "react";
import {createHtmlElement} from "../../utils/element.js";
import {classNames} from "../../utils/classnames.js";
import {filterProps} from "../../utils/props.js";
import "./style.scss";

export function Placeholder (props) {
    let newProps = filterProps(props, ["className", "hover", "border", "fill", "active"]);
    //Assign classname props
    Object.assign(newProps, {
        "className": classNames(props.className, {
            "siimple__placeholder": true,
            "siimple__placeholder--active": props.active === true,
            "siimple__placeholder--hover": props.hover === true,
            "siimple__placeholder--border-dashed": props.border === "dashed",
            "siimple__placeholder--border-solid": props.border === "solid",
            "siimple__placeholder--fill": props.fill === true
        }),
        "align": "center"
    });
    //Return the placeholder component
    return React.createElement("div", newProps, props.children);
}

Placeholder.defaultProps = {
    "active": false,
    "hover": false,
    "fill": false,
    "border": "dashed"
};

//Placeholder group
export const PlaceholderGroup = createHtmlElement("div", "siimple__placeholder-group");

