export const createAnchor = ({
    inHtmlId = "",
    inHref = "#",
    cls = "",
    inTableName = ""
}) => {

    const a =
        document.createElement("ks-anchor");

    a.setAttribute("html-id", inHtmlId);
    a.setAttribute("href", inHref);
    a.setAttribute("class-name", cls);

    if (inTableName) {
        a.setAttribute(
            "table-name",
            inTableName
        );
    }

    return a;
};