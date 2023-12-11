"use strict";

function getProductInfo(event) {
    const clickedProductId = event.currentTarget.dataset.id;
    let clickedProduct;
    for (let shoe of SHOES) {
        if (parseInt(clickedProductId) === shoe.id) {
            clickedProduct = shoe;
        }
    }
    return clickedProduct;
}