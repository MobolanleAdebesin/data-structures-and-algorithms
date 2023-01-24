const mergeSort = require("../review/mergeSort")

test("sorts array of length 4", () => {
    expect(mergeSort([44, 12, 6, 87])).toStrictEqual([6,12,44,87])
})
test("sorts array of length 8", () => {
    expect(mergeSort([44, 12, 92, 15, 0, 200, 6, 87])).toStrictEqual([0,6,12,15,44,87,92,200])
})
test("handles empty parameter", () => {
    expect(mergeSort()).toBeUndefined()
})
test("handles a null parameter", () => {
    expect(mergeSort(null)).toBeUndefined();
})
test("handles an empty array", () => {
    expect(mergeSort([])).toStrictEqual([]);
})