"use strict";

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('show');
};

function renderfooter(parent) {
    let footer = document.createElement("div");
    footer.classList.add("footer-left")
    footer.innerHTML = `

<p>INFORMATION</p>

<div class="footer-nav">
<div id="about-us-button">ABOUT US</div>
</div>
</div>        
<div class="footer-right">
<p>Sign up to get 10% off your first order</p>
<div class="email-container">
<input type="SIGN UP" placeholder="ENTER EMAIL" class="email-container-1">
<input type="submit" value="SIGN UP" class="footer-email.btn">
<p>You´ll be the first to know about exclusive products launches, sales and much more. </p>
</div>

` ;
    parent.appendChild(footer);



    document.getElementById("about-us-button").addEventListener("click", (e) => {
        const modal = document.getElementById('about-us-popup');
        const overlay = document.getElementById('overlay_aboutUs');
        const closeButton = document.getElementById('close-button-about-us');
        modal.classList.add('show');

        overlay.addEventListener("click", (e) => {
            e.stopPropagation();
            closeModal(modal);
        });

        closeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            closeModal(modal);
        });
    });
};