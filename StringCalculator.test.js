const add = require('./StringCalculator');

//TC001 - Handling Empty String
test('should return 0 for an empty string', ()=>{
    expect(add('')).toBe(0);
})

//TC002 - Handling a Single Number
test('should return the number itself for a single number string', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

//TC003 - Handling Two Numbers
test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,5")).toBe(8);
});

//TC004 - Handling more than Two Numbers
test('should return the sum of two numbers', () => {
    expect(add("2,2,4")).toBe(8);
    expect(add("3,5,67")).toBe(75);
});

//TC005 - Handling New Lines Between Numbers
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

//TC006 - Supporting Different Delimiters
test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
});

//TC007 - Handling Negative Numbers
test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});

//TC008 - Ignore numbers bigger than 1000
test('should ignore numbers bigger than 1000', () => {
    expect(add("2,1001")).toBe(2);
});

//TC009 - Support delimiters of any length
test('should support delimiters of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

//TC010 - Support multiple delimiters
test('should support multiple delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});

//TC011 - Support multiple delimiters with length greater than one character
test('should support multiple delimiters with length longer than one char', () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
});