// ==UserScript==
// @name         Steam Link Fixer
// @namespace    KovuTheHusky
// @version      1.0.1
// @description  Replace onclick attributes with actual links on Steam pages.
// @author       KovuTheHusky
// @match        http://steamcommunity.com/app/*/guides*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/KovuTheHusky/Fix-Steam-Guides/master/inject.user.js
// ==/UserScript==

'use strict';

var items = document.getElementsByClassName('workshopItemCollection');

for (var i = 0; i < items.length; ++i) {
    var element = items.item(i);
    var link = element.getAttribute('onclick');
    var parent = element.parentNode;
    var wrapper = document.createElement('a');
    element.removeAttribute('onclick');
    wrapper.setAttribute('href', link.substring(19, link.length - 1));
    parent.replaceChild(wrapper, element);
    wrapper.appendChild(element);
}
