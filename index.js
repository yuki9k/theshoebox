"use strict";

const structureContainers = renderStructure();
renderHeader(structureContainers.header);
renderfooter(document.querySelector("footer"));
createAboutUsPopUp(document.querySelector("#about-us-button"));
renderfilterbar(document.querySelector("#filter-bar"));
render_filter_pop_up(document.querySelector("#filter-button"));
renderProductCell(structureContainers.productGrid, SHOES);
