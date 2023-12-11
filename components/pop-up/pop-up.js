"use strict";

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

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

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}






function renderProductpopUp (event) {
  const shoe = getProductInfo(event.currentTarget);
  let productPopUp = document.createElement("div");
  productPopUp.setAttribute("id", "pop-up-shoe");
  productPopUp.innerHTML = `
  <button class="open-modal"  data-modal-target="#modal">More  information</button>
  <div class="modal" id="modal">
    <div class="modal-header">
    </div>
    <div class="modal-left">
        <div class="shoe"></div>
    </div>
    <div class="modal-right">
        <h2 class="info">${shoe.name}NIKE DUNK LOW 1 PANDA</h2>
        <p class="price">${shoe.price}1050 Kr</p>
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
  <div id="overlay"></div>`

  productPopUp.style.backgroundImage = `url(media/skobilder/${shoe.file.name})`

  document.body.appendChild(productPopUp);
}
