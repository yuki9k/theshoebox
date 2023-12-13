"use strict";

function getProductReviews(shoeId) {
    let productReviews = []
    for (const review of REVIEWS) {
        if (review.shoe_id === parseInt(shoeId)) {
            productReviews.push(review);
        }
    }
    return productReviews;
}