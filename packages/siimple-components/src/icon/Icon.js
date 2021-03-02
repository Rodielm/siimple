import React from "react";
import {filterProps} from "../utils/props.js";
import {classNames} from "../utils/classnames.js";

//Export icon component
export const Icon = function (props) {
    let newProps = filterProps(props, ["className", "icon", "iconTag", "size"]); //Filter props
    Object.assign(newProps, {
        "className": classNames(props.className, {
            "siimple-icon": true,
            ["is-" + props.icon]: props.icon !== ""
        }),
        "style": Object.assign({
            //"lineHeight": "normal",
            "fontSize": props.size
        }, props.style)
    });
    //Return the icon
    return React.createElement(props.iconTag, newProps, props.children);
};

//Icon default props
Icon.defaultProps = {
    "icon": "",
    "className": null,
    "iconTag": "i",
    "size": null
};

