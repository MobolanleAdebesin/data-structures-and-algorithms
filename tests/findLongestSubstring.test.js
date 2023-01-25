const findLongestSubstring = require("../problem-solving-approaches/exercise-9-sliding-window-findLongestSubstring-NOT-COMPLETE"); 


test("findLongestSubstring handles an empty parameter", () => {
    expect(findLongestSubstring()).toBe(0); 
})
test("findLongestSubstring returns 1 if string has at least one letter", () => {
    expect(findLongestSubstring("t")).toBe(1); 
})
test("findLongestSubstring handles rithmschool", () => {
    expect(findLongestSubstring("rithmschool")).toBe(7); 
})
test("findLongestSubstring handles thisisawesome", () => {
    expect(findLongestSubstring("thisisawesome")).toBe(6); 
})
test("findLongestSubstring handles bbbbbb", () => {
    expect(findLongestSubstring("bbbbbb")).toBe(1); 
})
test("findLongestSubstring handles longestsubstring", () => {
    expect(findLongestSubstring("longestsubstring")).toBe(8); 
})
test("findLongestSubstring handles thisishowwedoit", () => {
    expect(findLongestSubstring("thisishowwedoit")).toBe(6); 
})