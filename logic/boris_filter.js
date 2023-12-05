"use strict";

function boris_filter(randomArray, minPrice, maxPrice) {
    let answerArray = [];
    for (let shoe of randomArray) {
        if (shoe.price >= minPrice && shoe.price <= maxPrice)// större än eller lika med, mindre än eller lika med
        {
            answerArray.push(shoe); // pushar till "answerArray som är tom"
        }
    }
    return answerArray;
}

