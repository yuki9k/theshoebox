"use strict";

function renderfilterbar (parent) {
let filterBar = document.createElement ("div");
filterBar.classList.add ("bar");
filterBar.innerHTML = `
  <div class="navleft">
    <div><img src="media/icons/filterbar.png" alt=""></div>
  </div>  
             
  <div class="navright">
    <p>VIEW</p>
    <div><img src="media/icons/tkol.png" alt=""></div>
    <div><img src="media/icons/fcol.png" alt=""></div>
  </div>
`;

parent.appendChild(filterBar);
};