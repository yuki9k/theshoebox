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

// const shoeReviews = getProductReviews(shoeId);
// for (let review of shoeReviews) {
//     const reviewContainer = document.createElement("div");
//     reviewContainer.innerHTML = `
//     <p>Review Text:  ${review.score}</p>
//     `
// }