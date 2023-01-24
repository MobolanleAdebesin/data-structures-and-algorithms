const { is } = require("@babel/types");
const isSubsequence = require("../problem-solving-approaches/exercise-6-multiple-pointers-isSubsequence-NOT-COMPLETE-YET"); 
test("isSubsequence handles a substring longer than string", () => {
    expect(isSubsequence("abcde", "abc")).toBe(false)
})
test("isSubsequence handles  0 parameters", () => {
    expect(isSubsequence()).toBe(false); 
})
test("isSubsequence handles empty string parameters", () => {
    expect(isSubsequence("", "")).toBe(false); 
})
test("isSubsequence test case 1: hello / hello world", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true); 
})
test("isSubsequence test case 2: sing / sting", () => {
    expect(isSubsequence("sing", "sting")).toBe(true); 
})
test("isSubsequence test case 3: abc / abracadabra", () => {
    expect(isSubsequence("abc", "abracadabra")).toBe(true); 
})
test("isSubsequence test case 4, abc / acb", () => {
    expect(isSubsequence("abc", "acb")).toBe(false); 
})