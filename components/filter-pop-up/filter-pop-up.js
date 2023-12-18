"use strict"

function render_filter_pop_up(parent) {
    let filterMain = document.createElement("div")
    filterMain.setAttribute("id", "filterMain")
    filterMain.innerHTML = `<div id="filterReset">RESET FILTERS</div>
    <div id="filterCountry">
        <h2>SHOP BY COUNTRY</h2>
        <div>
            <input id="Sweden" type="checkbox">
            <label for="Sweden">SWEDEN</label>
        </div>
        <div>
            <input id="Spain" type="checkbox">
            <label for="Spain">SPAIN</label>
        </div>
        <div>
            <input id="Germany" type="checkbox">
            <label for="Germany">GERMANY</label>
        </div>
        <div>
            <input id="USA" type="checkbox">
            <label for="USA">USA</label>
        </div>
        <div>
            <input id="UK" type="checkbox">
            <label for="UK">UK</label>
        </div>
        <div>
            <input id="France" type="checkbox">
            <label for="France">FRANCE</label>
        </div>
        <div>
            <input id="Italy" type="checkbox">
            <label for="Italy">ITALY</label>
        </div>
        <div>
            <input id="Japan" type="checkbox">
            <label for="Japan">JAPAN</label>
        </div>
    </div>
    <div id="filterPrice">
        <h2>MAX PRICE</h2>
        <input id="maxPrice" type="range" min="210" max="1000" step="10" value="1000">
        <output for="maxPrice" id="priceOutput">1000</output>
    </div>
    <div id="filterType">
        <h2>TYPE OF SHOE</h2>
        <div>
            <input id="Sneakers" type="checkbox">
            <label for="Sneakers">SNEAKERS</label>
        </div>
        <div>
            <input id="Boots" type="checkbox">
            <label for="Boots">BOOTS</label>
        </div>
        <div>
            <input id="Slippers" type="checkbox">
            <label for="Slippers">SLIPPERS</label>
        </div>
    </div>
    `


    parent.appendChild(filterMain);
}