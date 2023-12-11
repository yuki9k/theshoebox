"use strict";

function getNumberOfReviews(shoeId) {
    let numbersOfReviews = 0;
    for (const review of REVIEWS) {
        if (review.shoe_id === parseInt(shoeId)) {
            numbersOfReviews++;
        }
    }
    return numbersOfReviews;
}