// ==UserScript==
// @name         Favicon Change
// @namespace    https://dktpham.link
// @version      0.1
// @description  Changes Favicon for certain Websites
// @author       David Pham
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let faviconMap = new Map([
        ["jira.de.nortal.com", "https://cdn.worldvectorlogo.com/logos/jira-1.svg"],
        ["confluence.de.nortal.com", "https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png"]]);
    let host = window.location.host;
    if (faviconMap.has(host)) {
        document.querySelector('link[rel="shortcut icon"]').setAttribute("href", faviconMap.get(host));
        document.querySelector('link[rel="icon"]').setAttribute("href", faviconMap.get(host));
    }
})();