"use strict";

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  document.querySelector("#pop-up-shoe").remove();
}

function renderProductPopUp(event) {
  const shoe = getProductInfo(event.currentTarget);
  let productPopUp = document.createElement("div");
  productPopUp.setAttribute("id", "pop-up-shoe");
  productPopUp.innerHTML = `
  <div class="modal active" id="modal">
    <div class="modal-header">
    </div>
    <div class="modal-left">
        <div class="shoe"></div>
    </div>
    <div class="modal-right">
        <h2 class="info">${shoe.name}</h2>
        <p class="price">${shoe.price}</p>
        <img class="star" src="../../../media/icons/star-full-icon-orange.png" alt="">
        <div class="size-container">
          <p class="size">36</p>
        </div>
        <div class="bag">ADD TO BAG</div>
        <div class="border"></div>
        <p>DETAILS</p>
    </div>
    <button data-close-button class="close-button">&times;</button>
    <div class="modal-bottom">
        <div id="grade"></div>
    </div>
  </div>
  <div class="active" id="overlay"></div>`

  document.body.appendChild(productPopUp);
  document.querySelector(".modal-left").style.backgroundImage = `url(media/skobilder/${shoe.file_name})`

  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
}
