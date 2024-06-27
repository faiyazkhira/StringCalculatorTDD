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
