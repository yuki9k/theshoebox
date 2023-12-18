"use strict"

function renderHeader (header) {
    header.innerHTML = `
    
    <div id="free-shipping">Free shipping on all orders in EU</div>

    <div id="items">
        <div id="search-bar"><img id="search-icon" src="media/icons/search-icon.png" alt="">Search</div>
        <h1 id="page-title">THE.SHOE.BOX</h1>
        
        <div id="header-icons">
            <img id="user-icon" src="media/icons/user-icon-orange.png" alt="">
            <img id="heart-icon" src="media/icons/heart-thin-icon-oranges.png" alt="">
            <img id="bag-icon" src="media/icons/bag-icon-orange.png" alt="">
    </div>
    `;
}
