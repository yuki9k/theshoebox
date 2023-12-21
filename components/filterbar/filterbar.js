"use strict";

function renderfilterbar(parent) {
  const filterBar = document.createElement("div");
  filterBar.classList.add("bar");
  filterBar.innerHTML = `
<div class="navleft">
  <div id="filter-button"><img src="media/icons/filterbar.png" alt=""></div>
</div>  
             
  <div class="navright">
    <p>VIEW</p>
    <div id="three-columns-button"><img src="media/icons/tkol.png" alt=""></div>
    <div id="four-columns-button"><img src="media/icons/fcol.png" alt=""></div>
  </div>
`;

  parent.appendChild(filterBar);

  function togglePopupShow(e) {
    e.stopPropagation();
    document.querySelector("#filterMain").classList.toggle("filter-popup-show")
  };

  const filterButton = document.querySelector("#filter-button > img");
  filterButton.addEventListener('click', togglePopupShow);

  document.querySelector("#three-columns-button").addEventListener("click", () => {
    document.querySelector("#product-grid").classList.remove("four-columns");
  });

  document.querySelector("#four-columns-button").addEventListener("click", () => {
    document.querySelector("#product-grid").classList.add("four-columns");
  });
};