"use strict";

function createAboutUsPopUp(parent) {
  let aboutUsPopUp = document.createElement("div");
  aboutUsPopUp.setAttribute("id", "about-us-popup");
  aboutUsPopUp.innerHTML = `
  <div id="about-us-modal">
  <div id="popup-text">
     <h1>About Us</h1>
     <p>We are the team behind The.Shoe.Box. We take the latest shoe trends and turn them into inspiring fashion in different styles, sizes and for all kinds of occasions. With our website you can easily find shoes to several occasions.</p>

     <p>We strive to offer a convenient shopping experience with high service levels, consistent user experiences across both mobile devices and desktop, quick deliveries and easy returns.</p>
  </div>

  <div id="popup-img">
   <img src="media/aboutus/IMG_7916.jpg" alt="Picture of project members">
  </div>

   <button id="close-button-about-us">&times;</button>

  </div>
  <div id="overlay_aboutUs"></div>
  `;

  parent.appendChild(aboutUsPopUp);
};