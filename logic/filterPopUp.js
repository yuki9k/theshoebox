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







function get_checked_ids(arr) {
    FILTER_MAP = Object.fromEntries(arr.map(x => [x.name, x.id]));
    new_arr = []
    for (let i = 0; i < checkboxes.length; i++) {


        // If checkbox name is in FILTER_MAP keys and is ticked
        if (checkboxes[i].id in FILTER_MAP && checkboxes[i].checked) {
            // Find corresponding id of checkbox name
            new_arr.push(FILTER_MAP[checkboxes[i].id]);
        }
    }
    return new_arr;
}
