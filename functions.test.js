const { test, expect } = require("@jest/globals")
const variable = require("./functions")

test("im adding add function", ()=>{expect(variable(2,2)).toBe(4)})
test("im adding add function", ()=>{expect(variable(3,2)).toBe(5)})