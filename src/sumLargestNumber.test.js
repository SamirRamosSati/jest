const sumLargestNumbers = require("./sumLargestNumber");

describe("sumLargestNumbers", () => {
  test("returns sum of two largest numbers", () => {
    expect(sumLargestNumbers([1, 10])).toBe(11);
    expect(sumLargestNumbers([1, 2, 3])).toBe(5); // 2 + 3
    expect(sumLargestNumbers([10, 4, 34, 6, 92, 2])).toBe(126); // 92 + 34
  });

  test("works with negative numbers", () => {
    expect(sumLargestNumbers([-10, -5, -1])).toBe(-6); // -1 + -5
  });

  test("returns NaN if array has fewer than 2 elements", () => {
    expect(sumLargestNumbers([10])).toBeNaN();
    expect(sumLargestNumbers([])).toBeNaN();
  });

  test("handles unsorted arrays correctly", () => {
    expect(sumLargestNumbers([7, 3, 9, 5])).toBe(16); // 9 + 7
  });
});
