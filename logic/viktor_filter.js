"use strict";

function filter_viktor(unfilteredArray, minPrice, maxPrice) {
    let filteredArray = [];
    for (let shoe of unfilteredArray) {
        if (shoe.price >= minPrice && shoe.price <= maxPrice) {
            filteredArray.push(shoe);
        }
    }
    return filteredArray;
}