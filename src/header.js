// src/header.js
import initHeader from "../bin/header/v2/commands/header/template/v3/initHeader.js";

(async () => {
    window.KSHeaderVersion = "v2.3";

    window.KSHeader = initHeader;
})();