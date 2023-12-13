"use strict";

const structureContainers = renderStructure();
render_filter_pop_up(structureContainers.filterPopup)
let filteredShoes = filter();
renderProductCell(structureContainers.productGrid, filteredShoes);