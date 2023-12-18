function renderShoeReviews(shoeReviews) {

    for (let review of shoeReviews) {
        const grade = document.createElement("div");
        grade.innerHTML = `
    <p>
    <img src="media/icons/star-full-icon-orange.png" alt="star">
    <article>${review.score}</article>
  </p>
  <section>
    <p><strong>Review:</strong></p>
    <p>${review.rev}</p>
  </section>  
  `;    
  
  document.getElementById("grade").appendChild(grade);
  }
}