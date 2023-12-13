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
        isBelowMaxPrice = maxPriceSlider.value >= SHOES[i].price
        isCorrectShoeType = noShoeTypeSelected || shoe_type_ids.includes(SHOES[i].kind_id);; // TODO


        if (isFromCountry && isBelowMaxPrice && isCorrectShoeType) {
            new_arr.push(SHOES[i])
        }


    }

    return new_arr;
}