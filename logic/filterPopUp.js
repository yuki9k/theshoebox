"use strict"

const priceOutput = document.getElementById('priceOutput');
const defaultValue = priceOutput.defaultValue;
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const maxPriceSlider = document.getElementById('maxPrice');


// Handle slider
maxPriceSlider.addEventListener('input', updateMaxPrice);
function updateMaxPrice() {
    priceOutput.textContent = maxPriceSlider.value;
};


function reset() {
    // Reset checkboxes
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });


    // Reset slider
    maxPriceSlider.value = parseInt(maxPriceSlider.max);


    // Reset price output
    updateMaxPrice();


    // Adds filter upon reset
    filter();
};


// Handle reset
const resetbtn = document.getElementById("filterReset");
resetbtn.addEventListener('click', reset);
resetbtn.addEventListener('click', () => renderProductCell(structureContainers.productGrid, filter()));
window.addEventListener('beforeunload', reset);
window.addEventListener('beforeunload', () => renderProductCell(structureContainers.productGrid, filter()));




COUNTRIES.forEach(
    country => document.querySelector("#" + country.name).addEventListener('click', () => renderProductCell(structureContainers.productGrid, filter()))
)


KINDS.forEach(
    kind => document.querySelector("#" + kind.name).addEventListener('click', () => renderProductCell(structureContainers.productGrid, filter()))
)


maxPriceSlider.addEventListener('mouseup', () => renderProductCell(structureContainers.productGrid, filter()));




// To be added to every button/checkbox
function filter() {
    country_ids = get_checked_ids(COUNTRIES);
    shoe_type_ids = get_checked_ids(KINDS);


    noCountrySelected = country_ids.length === 0;
    noShoeTypeSelected = shoe_type_ids.length === 0;


    // Find all shoes that have a country id that is in the country_ids array
    new_arr = []
    for (let i = 0; i < SHOES.length; i++) {


        isFromCountry = noCountrySelected || country_ids.includes(SHOES[i].country_id);
        isBelowMaxPrice = maxPriceSlider.value >= SHOES[i].price;
        isCorrectShoeType = noShoeTypeSelected || shoe_type_ids.includes(SHOES[i].kind_id); // TODO


        if (isFromCountry && isBelowMaxPrice && isCorrectShoeType) {
            new_arr.push(SHOES[i])
        }


    }

    return new_arr;
};


function get_checked_ids(arr) {
    FILTER_MAP = Object.fromEntries(arr.map(x => [x.name, x.id]));
    new_arr = [];
    for (let i = 0; i < checkboxes.length; i++) {


        // If checkbox name is in FILTER_MAP keys and is ticked
        if (checkboxes[i].id in FILTER_MAP && checkboxes[i].checked) {
            // Find corresponding id of checkbox name
            new_arr.push(FILTER_MAP[checkboxes[i].id]);
        }
    }
    return new_arr;
};