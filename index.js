"use strict";

const structureContainers = renderStructure();
renderHeader(structureContainers.header);
renderfooter(document.querySelector("footer"));
createAboutUsPopUp(document.querySelector("#about-us-button"));
renderfilterbar(document.querySelector("#filter-bar"));
renderProductCell(structureContainers.productGrid, SHOES);
