// src/header.js
import initHeader from "../bin/header/v4/commands/header/template/v3/initHeader.js";

(async () => {
    window.KSHeaderVersion = "v4.3";

    window.KSHeader = initHeader;
})();