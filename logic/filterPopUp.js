const priceOutput = document.getElementById('priceOutput');
const defaultValue = priceOutput.defaultValue
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const maxPriceSlider = document.getElementById('maxPrice');


// Handle slider
maxPriceSlider.addEventListener('input', updateMaxPrice);
function updateMaxPrice() {
    priceOutput.textContent = maxPriceSlider.value;
}


function reset() {
    // Reset checkboxes
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    })


    // Reset slider
    maxPriceSlider.value = (parseInt(maxPriceSlider.min) + parseInt(maxPriceSlider.max)) / 2;


    // Reset price output
    updateMaxPrice()


    // Adds filter upon reset
    filter()
}


// Handle reset
const resetbtn = document.getElementById("filterReset")
resetbtn.addEventListener('click', reset)
window.addEventListener('beforeunload', reset)




COUNTRIES.forEach(
    country => document.querySelector("#" + country.name).addEventListener('click', filter)
)


KINDS.forEach(
    kind => document.querySelector("#" + kind.name).addEventListener('click', filter)
)


maxPriceSlider.addEventListener('mouseup', filter)







