import { createLi } from "../createLi.js";
import { createAnchor } from "../createAnchor.js";
import { createLabel } from "../createLabel.js";
import { createIcon } from "../createIcon.js";
import { orchestrateMenuClick } from "./orchestrateMenuClick.js";

export const buildMenuItem = ({
    inTextToShow,
    inHtmlId,
    inIconPaths,
    inHref,
    onClick,
    inTableName,
    inClasses,
    inSvgName,
    inConfigUiClasses
}) => {
    const li = createLi(inClasses.liClass);

    // const a = createAnchor({
    //     inHtmlId,
    //     inHref,
    //     cls: inClasses?.aClass,
    //     inTableName
    // });

    const a = document.createElement("ks-menu-item");

    a.setAttribute("html-id", inHtmlId || "");
    a.setAttribute(
        "class-name",
        inClasses?.aClass || ""
    );
    a.setAttribute(
        "href",
        inHref || "#"
    );

    a.setAttribute(
        "table-name",
        inTableName || ""
    );

    a.setAttribute(
        "text",
        inTextToShow || ""
    );

    a.setAttribute(
        "svg-name",
        inSvgName || ""
    );

    // debugger;
    // const span = createLabel({
    //     inTextToShow: inTextToShow,
    //     inClassName: inClasses.spanClass
    // });

    // const svg = createIcon({
    //     inSvgName,
    //     inSvgDivClass: inConfigUiClasses.svgDivClass
    // });

    // if (onClick) {
    //     a.addEventListener(
    //         "click",
    //         orchestrateMenuClick({
    //             onClick
    //         })
    //     );
    // };

    // a.append(svg, span);

    li.appendChild(a);

    return li;
};