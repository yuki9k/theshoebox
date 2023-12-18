"use strict";

function renderfilterbar(parent) {
  const filterBar = document.createElement("div");
  filterBar.classList.add("bar");
  filterBar.innerHTML = `
<div class="navleft">
  <div id="filter-button"><img src="icons/icons/filterbar.png" alt=""></div>
</div>  
             
<div class="navright">
  <p>View</p>
  <div><img src="icons/icons/tkol.png" alt=""></div>
  <div><img src="icons/icons/fcol.png" alt=""></div>
</div>
`;

  parent.appendChild(filterBar);
  const filterButton = document.querySelector("#filter-button > img");
  filterButton.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector("#filterMain").classList.toggle("filter-popup-show");
  })
};