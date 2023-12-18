"use strict";

function renderfilterbar (parent) {
let filterBar = document.createElement ("div");
filterBar.classList.add ("bar");
filterBar.innerHTML = `
<div class="navleft">
  <div><img src="filterbar.png" alt=""></div>
</div>  
             
<div class="navright">
  <p>View</p>
  <div><img src="tkol.png" alt=""></div>
  <div><img src="fcol.png" alt=""></div>
</div>
`;

parent.appendChild(filterBar);
};