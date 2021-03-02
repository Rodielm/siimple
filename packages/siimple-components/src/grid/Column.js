import React from "react";
import {classNames} from "../utils/classnames.js";
import {filterProps} from "../utils/props.js";

//Grid column class
export const Column = function (props) {
    let newProps = filterProps(props, ["className", "size", "mobile", "tablet", "desktop", "fullhd"]);
    let classList = ["siimple-column"];
    //Check the column size
    if (typeof props.size === "number" || typeof props.size === "string") {
        classList.push("is-" + props.size);
    }
    if (typeof props.mobile === "number" || typeof props.mobile === "string") {
        classList.push("mobile:is-" + props.mobile);
    }
    if (typeof props.tablet === "number" || typeof props.tablet === "string") {
        classList.push("tablet:is-" + props.tablet);
    }
    if (typeof props.desktop === "number" || typeof props.desktop === "string") {
        classList.push("desktop:is-" + props.desktop);
    }
    if (typeof props.fullhd === "number" || typeof props.fullhd === "string") {
        classList.push("fullhd:is-" + props.desktop);
    }
    //Join all class names
    newProps.className = classNames(classList, props.className);
    //Return the grid element
    return React.createElement("div", newProps, props.children);
};

//Column default props
Column.defaultProps = {
    "size": null, 
    "mobile": null,
    "tablet": null, 
    "desktop": null, 
    "fullhd": null
};

