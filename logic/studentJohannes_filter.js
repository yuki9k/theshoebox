function studentJohannes_filter(arr, x, y) {
    let filter_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= x && arr[i].price <= y) {
            filter_arr.push(arr[i])
        }
        return filter_arr
    }
}
