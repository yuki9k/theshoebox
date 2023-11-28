"use strict"

function render_structure (container) {
    container.innerHTML = `
    <header>
        <div id="free_shipping"></div>
        <div id="search_bar"></div>
        <h1 id="title">THE.SHOE.BOX</h1>
        <div id="icons"></div>
    </header>
    <div id="filters_bar">
        <div id="filters_left">
            <div id="filters_button">
                <div id="filters_popup"></div>
            </div>
        <div id="active_filters"></div>    
        </div>    

        <div id="filters_right">
            <h2 id="view">VIEW</h2>
            <div id="view_icons"></div>
        </div>
    </div>
    <main>

    </main>
    <footer>
        <div id="footer_left">
            <h2 id="information"></h2>
            <div id="about_us_button">
                <div id="about_us_popup"></div>
            </div>
        </div>

        <div id="footer_right">
            <div id="email_information"></div>
        </div>
    </footer>`;

    return {
        header: container.querySelector("header"),
        freeShipping: container.querySelector("#free_shipping"),
        searchBar: container.querySelector("#search_bar"),
        title: container.querySelector("#title"),
        icons: container.querySelector("#icons"),
        filtersBar: container.querySelector("#filters_bar"),
        filtersLeft: container.querySelector("#filters_left"),
        filtersButton: container.querySelector("#filters_button"),
        filtersPopup: container.querySelector("#filters_popup"),
        activeFilters: container.querySelector("#active_filters"),
        filtersRight: container.querySelector("#filters_right"),
        view: container.querySelector("#view_icons"),
        main: container.querySelector("main"),
        footer: container.querySelector("footer"),
        footerLeft: container.querySelector("#footer_left"),
        information: container.querySelector("#information"),
        aboutUsButton: container.querySelector("#about_us_button"),
        aboutUsPopup: container.querySelector("#about_us_popup"),
        footerRight: container.querySelector("#footer_right"),
        emailInformation: container.querySelector("#email_information")
    }
}