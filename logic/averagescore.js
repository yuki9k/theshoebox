function calculateAverageScoreByShoeId(reviews) {
    const scoreSumByShoeId = {};
    const countByShoeId = {};
  
    reviews.forEach(review => {
      const { shoe_id, score } = review;
  
      if (scoreSumByShoeId[shoe_id] === undefined) {
        scoreSumByShoeId[shoe_id] = 0;
        countByShoeId[shoe_id] = 0;
      }
  
      scoreSumByShoeId[shoe_id] += score;
      countByShoeId[shoe_id]++;
    });
  
    const averageScoreByShoeId = {};
  
    for (const shoe_id in scoreSumByShoeId) {
      averageScoreByShoeId[shoe_id] = scoreSumByShoeId[shoe_id] / countByShoeId[shoe_id];
    }
  
    return averageScoreByShoeId;
  }
  
  const averageScoreByShoeId = calculateAverageScoreByShoeId(REVIEWS);
  
  console.log("Average Score by Shoe ID:", averageScoreByShoeId);

  for (let shoe of SHOES) {
    const grade = document.createElement("div");
    grade.innerHTML = `
    <div class="modal-bottom">
    <div>
        <img src="" alt="">
        <p></p>
        <p></p>
    </div>
        <p>Shoe ID: ${shoe.shoe_id}</p>
        <p>Score: ${shoe.score}</p>
        <p>Review: ${shoe.rev}</p>
    </div>
    `;
  }