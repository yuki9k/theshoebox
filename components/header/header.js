"use strict"

function renderHeader (parent) {
    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `
    
    <div id="free-shipping">Free shipping on all orders in EU</div>

    <div id="items">
        <div id="search-bar">Search</div>
        <h1 id="page-title">THE.SHOE.BOX</h1>
    <div id="header-icons"></div>
    `;

    parent.appendChild(header);
}

/*
<div id="free-shipping">Free shipping on all orders in EU</div>

<div id="items">
    <div id="search-bar">Search</div>
    <h1 id="page-title">THE.SHOE.BOX</h1>
<div id="header-icons"></div>
*/