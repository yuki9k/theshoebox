"use strict"

window.onscroll = function() {
    showScrollButton();
};

function showScrollButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
}

function createScrollToTopButton() {
    var button = document.createElement("button");
    button.id = "scrollToTopBtn";
    button.innerHTML = "TOP";
    button.onclick = scrollToTop;
    document.body.appendChild(button);
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

window.onload = function() {
    createScrollToTopButton();
};