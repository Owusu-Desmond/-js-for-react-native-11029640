function processArray(arr) {
    return arr.map((num) => (num % 2 === 0 ? num * num : num * 3));
}
