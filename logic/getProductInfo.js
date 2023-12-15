"use strict";

function getProductInfo(shoe) {
    const clickedProductId = shoe.dataset.id;
    let clickedProduct;
    for (let shoe of SHOES) {
        if (parseInt(clickedProductId) === shoe.id) {
            clickedProduct = shoe;
        }
    }
    return clickedProduct;
}