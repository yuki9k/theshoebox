"use strict";

function renderAboutUsPopUp(event) {
  let aboutUsPopUp = document.createElement("div");
  aboutUsPopUp.setAttribute("id", "about-us-popup");
  aboutUsPopUp.innerHTML = 

  ` <div id="footer-left">

<button id="about-us-button">ABOUT US</button> 
<div id="about-us-popup">

  <div id="popup-text">
     <h1>About Us</h1>
     <p>We are the team behind The.Shoe.Box. We take the latest shoe trends and turn them into inspiring fashion in different styles, sizes and for all kinds of occasions. With our website you can easily find shoes to several occasions.</p>

     <p>We strive to offer a convenient shopping experience with high service levels, consistent user experiences across both mobile devices and desktop, quick deliveries and easy returns.</p>
  </div>

  <div id="popup-img">
   <img src="media/image12.png" alt="Picture of project members">
  </div>

   <button id="close_button">&times;</button>

</div>

<div id="overlay_aboutUs"></div> 
`

parent.appendChild(aboutUsPopUp)
};

const modal = document.getElementById('about-us-popup');
const openButton = document.getElementById('about-us-button');
const closeButton = document.getElementById('close_button');
const overlay = document.getElementById('overlay_aboutUs')

function openModal() {
  modal.classList.add('show');
  overlay.classList.add('active');
}

function closeModal() {
  modal.classList.remove('show');
  overlay.classList.remove('active');
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
