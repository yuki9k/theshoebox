"use strict";

function renderStructure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `
    <header></header>
    <div id="filter-bar"></div>
    <main id="product-grid"></main>
    <footer></footer>`;
    return {
        // freeShipping: container.querySelector("#free-shipping"),
        header: container.querySelector("header"),
        // searchBar: container.querySelector("#search-bar"),
        // pageTitle: container.querySelector("#page-title"),
        // headerIcons: container.querySelector("#header-icons"),
        filterBar: container.querySelector("#filter-bar"),
        // filterLeft: container.querySelector("#filter-left"),
        // filterButton: container.querySelector("#filter-button"),
        // filterPopup: container.querySelector("#filter-popup"),
        // activeFilters: container.querySelector("#active-filters"),
        // filterRight: container.querySelector("#filter-right"),
        // viewButtons: container.querySelector("#view-buttons"),
        productGrid: container.querySelector("#product-grid"),
        footer: container.querySelector("footer"),
        // footerLeft: container.querySelector("#footer-left"),
        // aboutUsButton: container.querySelector("#about-us-button"),
        // aboutUsPopup: container.querySelector("#about-us-popup"),
        // footerRight: container.querySelector("#footer-right"),
        // emailContainer: container.querySelector("#email-container")
    }
}