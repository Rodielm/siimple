import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Export main table component
export const Table = function (props) {
    let newProps = filterProps(props, ["className", "striped", "bordered", "hoverable", "divided", "small", "large"]);
    newProps.className = classNames(props.className, {
        "siimple-table": true,
        "is-striped": props.striped === true,
        "is-bordered": props.bordered === true,
        "is-hoverable": props.hoverable === true,
        "is-divided": props.divided === true,
        "is-small": props.small === true,
        "is-large": props.large === true
    });
    //Return the table wrapper element
    return React.createElement("div", newProps, props.children);
};

//Table default properties
Table.defaultProps = {
    "striped": false, 
    "bordered": false, 
    "hoverable": false,
    "divided": false,
    "small": false,
    "large": false
};

//Export table header component
export const TableHeader = createHtmlElement("div", "siimple-table-header");
export const TableBody = createHtmlElement("div", "siimple-table-body");
export const TableRow = createHtmlElement("div", "siimple-table-row");

//Export table cell component
export const TableCell = function (props) {
    let newProps = filterProps(props, ["className", "sortable", "order"]);
    let classList = ["siimple-table-cell"];
    //Check the sortable option
    if (typeof props.sortable === "boolean" && props.sortable === true) {
        classList.push("is-sortable");
    }
    //Check the sort order
    if (typeof props.order === "string") {
        classList.push("is-" + props.order);
    }
    //Merge classlist
    newProps.className = classNames(classList, props.className);
    //Return the table cell
    return React.createElement("div", newProps, props.children);
};

//Table cell default props
TableCell.defaultProps = {
    "sortable": false,
    "order": null
};

