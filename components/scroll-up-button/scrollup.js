"use strict"

function renderScrollBtn (parent) {
    const scrollBtn = document.createElement("button");
    scrollBtn.classList.add("scroll-button");
    scrollBtn.innerHTML = ``;

    parent.appendChild(scrollBtn);
}
