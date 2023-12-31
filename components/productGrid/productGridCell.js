"use strict";

function renderProductCell(parent, array) {
    parent.innerHTML = "";

    function returnTypeOfShoe(kindID) {
        switch (kindID) {
            case 1:
                return "Slippers";
            case 2:
                return "Boots";
            case 3:
                return "Sneakers";
            default:
                return "Shoes";
        }
    }

    for (let shoe of array) {
        const productCell = document.createElement("div");
        productCell.classList.add("product-cell");
        productCell.setAttribute("data-id", shoe.id);
        productCell.innerHTML = `
        <div class="flag">
            <img src="media/flags/${shoe.country_id}.png">
        </div>
        <div class="shoe-pic">
            <img src="media/skobilder/${shoe.file_name}">
        </div>
        <div class="shoe-information">
            <h3 class="shoe-type">${returnTypeOfShoe(shoe.kind_id)}</h3>
            <h1 class="shoe-name">${shoe.name}</h1>
            <h2 class="shoe-price">${shoe.price} kr</h2>
        </div>
        `;
        productCell.addEventListener("click", renderProductPopUp);
        parent.appendChild(productCell);
    }
}