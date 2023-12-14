function renderShoeReviews(shoeReviews) {

  // const shoeReviews = getProductReviews(shoeId);

  for (let review of shoeReviews) {
    const grade = document.createElement("div");
    grade.innerHTML = `
    <p>Review: ${review.rev}</p>
  `;

    document.getElementById("grade").appendChild(grade);
  }
}