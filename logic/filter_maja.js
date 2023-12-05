"use strict";

function filter_maja(a_shoelist, i_min, i_max) {
    let a_filteredshoelist = [];
    for (let myshoe of a_shoelist) {
        if (myshoe.price >= i_min && myshoe.price <= i_max) {
            a_filteredshoelist.push(myshoe);
        }
    }
    return a_filteredshoelist;
}