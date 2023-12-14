function shoereviews (){

const shoeReviews = getProductReviews(REVIEWS.shoe_id);

  for (let review of shoeReviews) {
  const grade = document.createElement("div");
  reviewElement.innerHTML = `
    <p>Review: ${review.rev}</p>
  `;

  document.getElementById("grade").appendChild(grade);
  }
}