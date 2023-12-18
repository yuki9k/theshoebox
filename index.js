"use strict";

const structureContainers = renderStructure();
renderfooter(document.querySelector("footer"));
renderAboutUsPopUp(document.querySelector("#about-us-button"));
addAboutUsFunctionality();
renderfilterbar(document.querySelector("#filter-bar"));
renderProductCell(structureContainers.productGrid, SHOES);
