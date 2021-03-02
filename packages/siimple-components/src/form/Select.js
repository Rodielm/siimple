import React from "react";
import {classNames} from "../utils/classnames.js";
import {filterProps} from "../utils/props.js";

//Select component
export const Select = React.forwardRef(function (props, ref) {
    let selectProps = filterProps(props, ["full", "fluid", "className", "ref"]); //Filter props
    //Save the className
    selectProps.className = classNames(props.className, {
        "siimple-select": true,
        "is-full": props.full || props.fluid === true
    });
    //Save the select reference
    selectProps.ref = ref;
    //Return the select element
    return React.createElement("select", selectProps, props.children);
});

//Select default props
Select.defaultProps = {
    "fluid": false, //DEPRECATED
    "full": false
};

