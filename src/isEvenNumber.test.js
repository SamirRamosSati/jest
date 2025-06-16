const { isEvenNumber, conditionalSum } = require("./isEvenNumber");

describe("isEvenNumber", () => {
  test("should return true for even number", () => {
    expect(isEvenNumber(2)).toBe(true);
    expect(isEvenNumber(0)).toBe(true);
  });

  test("should return false for odd number", () => {
    expect(isEvenNumber(1)).toBe(false);
    expect(isEvenNumber(9)).toBe(false);
  });
});

describe("conditionalSum", () => {
  test("should return sum of even numbers", () => {
    expect(conditionalSum([1, 2, 3, 4, 5], "even")).toBe(6); // 2 + 4
    expect(conditionalSum([13, 88, 12, 44, 99], "even")).toBe(144); // 88 + 12 + 44
  });

  test("should return sum of odd numbers", () => {
    expect(conditionalSum([1, 2, 3, 4, 5], "odd")).toBe(9); // 1 + 3 + 5
  });

  test("should return 0 for empty array", () => {
    expect(conditionalSum([], "odd")).toBe(0);
    expect(conditionalSum([], "even")).toBe(0);
  });

  test("should return 0 for no matching condition", () => {
    expect(conditionalSum([2, 4, 6], "odd")).toBe(0);
    expect(conditionalSum([1, 3, 5], "even")).toBe(0);
  });
});
