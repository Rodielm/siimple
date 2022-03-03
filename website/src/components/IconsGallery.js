import React from "react"
import kofi from "kofi";
import icons from "siimple-icons";

import {Link} from "./Link.js";
import {Icon} from "./Icon.js";
import {LiveCode} from "./LiveCode.js";
import {copyTextToClipboard} from "../utils/clipboard.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.id < b.id ? -1 : +1);

// Generate icon usage string
const getIconUsage = icon => {
    return `<i class="icon is-${icon.id}"></i>`;
};

// Get icon unicode
const getIconUnicode = icon => icon.unicode.toString(16).toLowerCase();

// Get displayed icons
const getDisplayedIcons = query => {
    return !query ? sortedIcons : sortedIcons.filter(icon => icon.id.includes(query)); 
};

const IconsList = props => {
    const displayedIcons = getDisplayedIcons(props.query);
    if (displayedIcons.length === 0) {
        return (
            <div align="center" className="has-mx-auto has-w-full has-maxw-128">
                <div className="">
                    <Icon icon="face-sad" style={{fontSize: "96px"}} />
                </div>
                <div className="title is-2 has-mt-3 has-mb-2">No icons found</div>
                <div className="paragraph has-text-lg">
                    There are no icons that matches <strong>"{props.query}"</strong>.
                </div>
            </div>
        );
    }
    return (
        <div className="has-d-flex has-flex-wrap">
            {displayedIcons.map(icon => {
                const isActive = icon.id === props.activeIcon?.id;
                const iconClass = kofi.classNames("has-p-6 has-w-24 has-radius has-d-flex has-cursor-pointer", {
                    "hover:has-bg-white": !isActive,
                    "has-bg-blue-500 has-text-white": isActive,
                });
                return (
                    <div key={icon.id} className={iconClass} onClick={() => props.onIconClick(icon)}>
                        <Icon icon={icon.id} className="has-text-4xl" />
                    </div>
                );
            })}
        </div>
    );
};

const IconModal = props => {
    const [iconCopied, setIconCopied] = React.useState(false);
    const previewClass = kofi.classNames([
        "has-d-flex has-justify-center has-p-12 has-radius",
        "has-mb-4",
        "has-bg-coolgray-200 has-text-coolgray-700",
    ]);
    const iconHtml = getIconUsage(props.icon);
    const iconSvgUrl = `${process.env.REPO_URL}/raw/main/icons/${props.icon.id}.svg`;
    const handleIconCopy = () => {
        copyTextToClipboard(iconHtml);
        setIconCopied(true);
    };
    return (
        <div className="scrim">
            <div className="modal is-medium">
                <div className="has-d-flex has-items-center has-mb-6">
                    <div className="title is-3 has-mb-0">
                        {props.icon.id} <span className="has-weight-normal">({getIconUnicode(props.icon)})</span>
                    </div>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <div className={previewClass}>
                    <Icon icon={props.icon.id} style={{fontSize:"128px"}} />
                </div>
                <div className="paragraph">Using this icon as a webfont:</div>
                <LiveCode className="html">{iconHtml}</LiveCode>
                <div className="columns">
                    <div className="column has-py-0">
                        <div
                            className="btn has-d-flex has-items-center has-justify-center"
                            onClick={() => handleIconCopy()}
                        >
                            <Icon icon="copy" className="has-pr-1 has-text-lg" />
                            <strong>{iconCopied ? "Copied!" : "Copy HTML"}</strong>
                        </div>
                    </div>
                    <div className="column has-py-0">
                        <Link
                            to={iconSvgUrl}
                            target="_blank"
                            className="btn is-secondary has-d-flex has-items-center has-justify-center"
                        >
                            <Icon icon="download" className="has-pr-1 has-text-lg" />
                            <strong>Download SVG</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export Icons Gallery component
export const IconsGallery = () => {
    const [query, setQuery] = React.useState("");
    const [activeIcon, setActiveIcon] = React.useState(null);
    return (
        <React.Fragment>
            {/* Hero block */}
            <div className="tablet:has-pt-24 mobile:has-pt-12 has-pb-32">
                <div className="has-mx-auto has-w-full has-maxw-128" align="center">
                    <div className="title is-1">Hand-crafted icons toolkit</div>
                    <div className="has-text-coolgray-500">
                        An Open Source icon webfont that can be used in web and mobile projects. 
                        Made with a lot of <Icon icon="heart" />.
                    </div>
                </div>
            </div>
            {/* Icons list */}
            <div className="has-mb-24">
                <div className="has-d-flex has-items-center has-mb-4 has-bg-coolgray-200 has-radius">
                    <Icon icon="search" className="has-text-2xl has-pl-3 has-pr-2" />
                    <input
                        type="text"
                        className="input has-flex-grow has-py-4"
                        placeholder="Search for icons..."
                        onChange={e => setQuery(e.target.value || "")}
                    />
                </div>
                <div className="has-p-12 has-bg-coolgray-200 has-radius">
                    <IconsList
                        icons={sortedIcons}
                        activeIcon={activeIcon}
                        query={query}
                        onIconClick={icon => setActiveIcon(icon)}
                    />
                </div>
            </div>
            {/* Active Icon --> display modal */}
            {kofi.when(!!activeIcon, () => (
                <IconModal
                    icon={activeIcon}
                    onClose={() => setActiveIcon(null)}
                />
            ))}
        </React.Fragment>
    );
};
