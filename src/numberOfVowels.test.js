const { numberOfVowels } = require("./numberOfVowels");

describe("numberOfVowels", () => {
  test("counts lowercase vowels correctly", () => {
    expect(numberOfVowels("hello")).toBe(2); // e, o
    expect(numberOfVowels("aeiou")).toBe(5); // all vowels
  });

  test("returns 0 if there are no vowels", () => {
    expect(numberOfVowels("rhythm")).toBe(0);
  });

  test("ignores uppercase vowels (case-sensitive)", () => {
    expect(numberOfVowels("AEIOU")).toBe(0); // only lowercase are counted
  });

  test("returns 0 for an empty string", () => {
    expect(numberOfVowels("")).toBe(0);
  });

  test("works with mixed characters", () => {
    expect(numberOfVowels("abc123!")).toBe(1); // only "a" is a vowel
  });
});
