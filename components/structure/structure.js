"use strict";

function renderStructure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `
    
    <header>

    <div id="free-shipping">Free shipping on all orders in EU</div>

    <div id="items">
        <div id="search-bar">Search</div>
        <h1 id="page-title">THE.SHOE.BOX</h1>
        <div id="header-icons"></div>
    </div>

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
      <p>INFORMATION</p>

        <div id="footer-nav">
            <nav> <a href="">ABOUT US</a></nav>
        </div>
    </div>        
    <div id="footer-right">
        <p>Sign up to get 10% off your first order</p>
        <div id="email-container">
            <input type="SIGN UP" placeholder="ENTER EMAIL" class="email-container-1">
            <input type="submit" value="SIGN UP" class="footer-email.btn">
            <p>You´ll be the first to know about exclusive products launches, sales and much more. </p>
        </div>
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
        footernav: container. querySelector("foter-nav"),
        aboutUsPopup: container.querySelector("#about-us-popup"),
        footerRight: container.querySelector("#footer-right"),
        emailContainer: container.querySelector("#email-container")
    }
    
}

