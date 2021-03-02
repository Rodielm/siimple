import React from "react";
import {classNames} from "../utils/classnames.js";
import {filterProps} from "../utils/props.js";

//List component 
export const List = function (props) {
    let newProps = filterProps(props, ["className", "hover"]);
    newProps.className = classNames(props.className, {
        "siimple-list": true,
        "is-hoverable": props.hover
    });
    //Return the list element
    return React.createElement("div", newProps, props.children);
};

//List default props 
List.defaultProps = {
    "hover": false
};

//List item component 
export const ListItem = function (props) {
    let newProps = filterProps(props, ["className", "active"]);
    newProps.className = classNames(props.className, {
        "siimple-list-item": true,
        "is-active": props.active
    });
    //Return the list item element
    return React.createElement("div", newProps, props.children);
};

ListItem.defaultProps = {
    "active": false
};

