"use strict";

function renderProductCell(parent, array) {
    for (let shoe of array) {
        const productCell = document.createElement("div");
        productCell.classList.add("product-cell");
        productCell.innerHTML = `
        <div class="flag">
            <img src="../../media/flags/${shoe.country_id}.png">
        </div>
        <div class="shoe-pic">
            <img src="../../media/skobilder/${shoe.file_name}.jpg">
        </div>
        <div class="shoe-information">
            <h3 class="type">SNEAKERS</h3>
            <h1 class="name">${shoe.name}</h1>
            <h2 class="price">${shoe.price}</h2>
        </div>
        `;
        parent.appendChild(productCell);
    }
}
