"use strict"
// Visa knappen när användaren har scrollat ner
window.onscroll = function() {
    showScrollButton();
  };

  function showScrollButton() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    // Visa knappen när användaren har scrollat ner 300px från toppen
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // Funktion för att skapa knappkomponenten
  function createScrollToTopButton() {
    var button = document.createElement("button");
    button.id = "scrollToTopBtn";
    button.innerHTML = "Scrolla till toppen";
    button.onclick = scrollToTop;
    document.body.appendChild(button);
  }

  // Scrolla upp när knappen klickas
  function scrollToTop() {
    document.body.scrollTop = 0; // För äldre webbläsare
    document.documentElement.scrollTop = 0; // För moderna webbläsare
  }

  // Skapa knappkomponenten vid sidans laddning
  window.onload = function() {
    createScrollToTopButton();
  };