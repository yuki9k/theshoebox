"use strict";
function renderStructure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `
    <div id="free-shipping"></div>
    <header>
        <div id="search-bar"></div>
        <h1 id="page-title"></h1>
        <div id="header-icons"></div>
    </header>
    <div id="filter-bar">
        <div id="filter-left">
            <div id="filter-button">
                <div id="filter-popup"></div>
            </div>
            <div id="active-filters"></div>
        </div>
        <div id="filter-right">
            <div id="view-buttons"></div>
        </div>
    </div>
    <main id="product-grid"></main>
    <footer>
        <div id="footer-left">
            <div id="about-us-button">
                <div id="about-us-popup"></div>
            </div>
        </div>
        <div id="footer-right">
            <div id="email-container"></div>
        </div>
    </footer>`;

    return {
        freeShipping: container.querySelector("#free-shipping"),
        header: container.querySelector("header"),
        searchBar: container.querySelector("#search-bar"),
        pageTitle: container.querySelector("#page-title"),
        headerIcons: container.querySelector("#header-icons"),
        filterBar: container.querySelector("#filter-bar"),
        filterLeft: container.querySelector("#filter-left"),
        filterButton: container.querySelector("#filter-button"),
        filterPopup: container.querySelector("#filter-popup"),
        activeFilters: container.querySelector("#active-filters"),
        filterRight: container.querySelector("#filter-right"),
        viewButtons: container.querySelector("#view-buttons"),
        productGrid: container.querySelector("#product-grid"),
        footer: container.querySelector("footer"),
        footerLeft: container.querySelector("#footer-left"),
        aboutUsButton: container.querySelector("#about-us-button"),
        aboutUsPopup: container.querySelector("#about-us-popup"),
        footerRight: container.querySelector("#footer-right"),
        emailContainer: container.querySelector("#email-container")
    }
}