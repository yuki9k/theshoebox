"use strict";

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  document.querySelector("#pop-up-shoe").remove();
}


function renderProductPopUp(event) {
  const shoeId = event.currentTarget.dataset.id;
  const shoe = getProductInfo(event.currentTarget);
  const shoeReviews = getProductReviews(shoeId);
  const averageScoreArray = calculateAverageScoreByShoeId(shoeReviews);
  const shoeAverageScore = String(averageScoreArray[shoeId]);
  let productPopUp = document.createElement("div");
  productPopUp.setAttribute("id", "pop-up-shoe");
  productPopUp.innerHTML = `
  <div class="modal" id="modal">
    <div class="modal-header">
    </div>
    <div class="modal-left">
        <div class="shoe"></div>
    </div>
    <div class="modal-right">
        <h2 class="info">${shoe.name}</h2>
        <p class="price">${shoe.price} kr</p>
        <div class="star">
          <p>${shoeAverageScore.substring(0, 3)}</p>
          <img src="media/icons/star-full-icon-orange.png" alt="">
          <p>(${shoeReviews.length})</p>
        </div>
        <div class="size-container">
          <p class="size">41<img src="media/icons/thin-arrow-bottom-icon.png" alt=""></p>
        </div>
        <div class="bag">ADD TO BAG</div>
        <div class="border"></div>
        <div class="details-box">
          <p>DETAILS</p>
          <img src="media/icons/thin-arrow-bottom-icon.png" alt="">
        </div>
        <img class="flag_pop_up" src="media/flags/${shoe.country_id}.png">
      </div>
    <button data-close-button class="close-button">&times;</button>
    <div class="modal-bottom">
        <div id="grade"></div>
    </div>
  </div>
  <div id="overlay"></div>`;

  document.body.appendChild(productPopUp);
  document.querySelector(".modal-left").style.backgroundImage = `url(media/skobilder/${shoe.file_name})`;

  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  });

  function addActiveClasses() {
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  setTimeout(addActiveClasses, 1);
};