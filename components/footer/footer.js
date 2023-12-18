"use strict";

function renderfooter(parent) {
    let footer = document.createElement("div");
    footer.classList.add("footer-left")
    footer.innerHTML = `

<p>INFORMATION</p>

<div class="footer-nav">
<nav> <a id="about-us-button" href="">ABOUT US</a></nav>
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
};