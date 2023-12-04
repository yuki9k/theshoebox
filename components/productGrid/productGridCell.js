"use strict";

function renderProductCell(parent, array) {
    for (let shoe of array) {
        const productCell = document.createElement("div");
        productCell.classList.add("product-cell");
        productCell.innerHTML = `
        
        `;
        parent.appendChild(productCell);
    }
}
