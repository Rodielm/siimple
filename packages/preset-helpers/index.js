import {generateHelpers} from "./utils.js";

// Common values
const colorsValues = {
    white: "#fff",
    black: "#000",
    current: "currentColor",
    transparent: "transparent",
};
const sizesValues = {
    none: "0px",
    one: "1px",
    half: "50%",
    full: "100%",
};

// Build helpers
const helpers = generateHelpers([
    // Colors
    {
        prefix: "has",
        shortcut: "bg",
        properties: ["backgroundColor"],
        states: ["default", "hover", "focus"],
        responsive: false,
        scale: "colors",
        values: colorsValues,
    },
    {
        prefix: "has",
        shortcut: "text",
        properties: ["color"],
        states: ["default", "hover", "focus"],
        responsive: false,
        scale: "colors",
        values: colorsValues,
    },
    // Fonts
    {
        prefix: "has",
        shortcut: "font",
        properties: ["fontFamily"],
        states: ["default"],
        responsive: false,
        scale: "fonts",
    },
    // Font sizes
    {
        prefix: "has",
        shortcut: "size",
        properties: ["fontSize"],
        states: ["default"],
        responsive: false,
        scale: "fontSizes",
    },
    // Font weights
    {
        prefix: "has",
        shortcut: "weight",
        properties: ["fontWeight"],
        states: ["default"],
        scale: "fontWeights",
    },
    // Line heights
    {
        prefix: "has",
        shortcut: "lh",
        properties: ["lineHeight"],
        states: ["default"],
        responsive: false,
        scale: "lineHeights",
        values: {
            none: "1",
            tight: "1.25",
            normal: "1.5",
            loose: "2",
        },
    },
    // Opacities
    {
        prefix: "has",
        shortcut: "opacity",
        properties: ["opacity"],
        states: ["default"],
        responsive: true,
        scale: "opacities",
    },
    // Radius
    {
        prefix: "has",
        shortcut: "radius",
        properties: ["borderRadius"],
        states: ["default"],
        responsive: false,
        scale: "radius",
        values: {
            none: "0px",
            full: "9999px",
        },
    },
    // Shadows
    {
        prefix: "has",
        shortcut: "shadow",
        properties: ["boxShadow"],
        states: ["default"],
        responsive: false,
        scale: "shadows",
        values: {
            none: "none",
        },
    },
    // Sizes
    {
        prefix: "has",
        shortcut: "w",
        properties: ["width"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            auto: "auto",
            screen: "100vw",
        },
    },
    {
        prefix: "has",
        shortcut: "minw",
        properties: ["min-width"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            auto: "auto",
            screen: "100vw",
        },
    },
    {
        prefix: "has",
        shortcut: "maxw",
        properties: ["max-width"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            auto: "auto",
            screen: "100vw",
        },
    },
    {
        prefix: "has",
        shortcut: "h",
        properties: ["height"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            auto: "auto",
            screen: "100vh",
        },
    },
    {
        prefix: "has",
        shortcut: "minh",
        properties: ["min-height"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            auto: "auto",
            screen: "100vh",
        },
    },
    {
        prefix: "has",
        shortcut: "maxh",
        properties: ["max-height"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            auto: "auto",
            screen: "100vh",
        },
    },
    {
        prefix: "has",
        shortcut: "s",
        properties: ["height", "width"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: sizesValues,
    },
    ...["bottom","left","right","top"].map(position => ({
        prefix: "has",
        shortcut: position,
        properties: [position],
        states: ["default"],
        responsive: true,
        values: sizesValues,
    })),
    // spacing
    {
        prefix: "has",
        shortcut: "p",
        properties: ["padding"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "px",
        properties: ["padding-left", "padding-right"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "py",
        properties: ["padding-top", "padding-bottom"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "pt",
        properties: ["padding-top"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "pb",
        properties: ["padding-bottom"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "pl",
        properties: ["padding-left"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "pr",
        properties: ["padding-right"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "m",
        properties: ["margin"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "mx",
        properties: ["margin-left", "margin-right"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "my",
        properties: ["margin-top", "margin-bottom"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "mt",
        properties: ["margin-top"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "mb",
        properties: ["margin-bottom"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "ml",
        properties: ["margin-left"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "mr",
        properties: ["margin-right"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: {
            ...sizesValues,
            auto: "auto",
        },
    },
    // Flexbox
    {
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex"],
        values: {
            "none": "none",
            "initial": "initial",
            "auto": "auto",
        },
    },
    {
        prefix: "has",
        shortcut: "direction",
        states: ["default"],
        responsive: true,
        properties: ["flex-direction"],
        values: {
            "row": "row", 
            "column": "column", 
            "row-rev": "row-reverse", 
            "column-rev": "column-reverse",
        },
    },
    {
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    },
    {
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    },
    {
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "wrap-rev": "wrap-reverse",
            "no-wrap": "nowrap",
        },
    },
    {
        prefix: "has",
        shortcut: "content",
        states: ["default"],
        responsive: true,
        properties: ["align-content"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
    },
    {
        prefix: "has",
        shortcut: "items",
        states: ["default"],
        responsive: true,
        properties: ["align-items"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
        },
    },
    {
        prefix: "has",
        shortcut: "self",
        states: ["default"],
        responsive: true,
        properties: ["align-self"],
        values: {
            auto: "auto",
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
        },
    },
    {
        prefix: "has",
        shortcut: "justify",
        states: ["default"],
        responsive: true,
        properties: ["justify-content"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
    },
    {
        prefix: "has",
        shortcut: "justify-items",
        states: ["default"],
        responsive: true,
        properties: ["justify-items"],
        values: {
            start: "start",
            end: "end",
            center: "center",
            stretch: "stretch",
        },
    },
    {
        prefix: "has",
        shortcut: "justify-self",
        states: ["default"],
        responsive: true,
        properties: ["justify-self"],
        values: {
            auto: "auto",
            start: "start",
            end: "end",
            center: "center",
            stretch: "stretch",
        },
    },
    {
        prefix: "has",
        shortcut: "order",
        states: ["default"],
        responsive: true,
        properties: ["order"],
        values: {
            none: "0",
            first: "-999",
            last: "999",
        },
    },
    // Text
    {
        prefix: "has",
        shortcut: "text",
        states: ["default"],
        responsive: false,
        properties: ["text-align"],
        values: {
            justified: "justify", 
            left: "left", 
            center: "center", 
            right: "right",
        },
    },
    // Vertical align
    {
        prefix: "has",
        shortcut: "align",
        states: ["default"],
        responsive: false,
        properties: ["vertical-align"],
        values: {
            "baseline": "baseline",
            "top": "top",
            "middle": "middle",
            "bottom": "bottom",
            "text-top": "text-top",
            "text-bottom": "text-bottom",
        },
    },
    // Cursor
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["cursor"],
        important: true,
        values: {
            "clickable": ["pointer", "!important"],
            "not-allowed": ["not-allowed", "!important"],
        },
    },
    // Display
    {
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["display"],
        values: {
            "block": "block",
            "flex": "flex",
            "inline": "inline",
            "inline-block": "inline-block",
            "inline-flex": "inline-flex",
            "hidden": "none",
        },
    },
    // Float
    {
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["float"],
        values: {
            "aligned-left": "left",
            "aligned-right": "right",
        },
    },
    // Overflow
    {
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["overflow"],
        values: {
            "clipped": ["hidden", "!important"],
            "scrollable": ["auto", "!important"],
        },
    },
    // Position
    {
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["position"],
        values: {
            "relative": "relative",
            "absolute": "absolute",
            "sticky": "sticky",
            "fixed": "fixed",
        },
    },
    // Text
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["fontStyle"],
        values: {
            italic: "italic"
        },
    },
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["textDecoration"],
        values: {
            "underlined": "underline",
            "not-underlined": ["none", "!important"],
        },
    },
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["textTransform"],
        values: {
            "capitalized": "capitalize",
            "lowercase": "lowercase",
            "uppercase": "uppercase",
        },
    },
    // Negative selectors
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["borderRadius"],
        values: {
            "radiusless": ["0px", "!important"],
        },
    },
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["boxShadow"],
        values: {
            "shadowless": ["none", "!important"],
        },
    },
    {
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["userSelect"],
        values: {
            "unselectable": ["none", "!important"],
        },
    },
]);

// Export helpers styles
export default {
    styles: helpers,
};
