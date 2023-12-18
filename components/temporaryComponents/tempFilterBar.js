"use strict";


// filterBar argumentet bör vara structureContainers.filterBar
function tempFilterBar(filterBar) {
    filterBar.innerHTML = `
    <div id="filter-left">
            <div id="filter-button">
                <div id="filter-popup"></div>
            </div>
            <div id="active-filters"></div>
        </div>
        <div id="filter-right">
            <div id="view-buttons"></div>
        </div>
    `;
}