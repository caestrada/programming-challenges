import { maxValue } from "./max-value";

const tests = [
  {
    input: [4, 7, 2, 8, 10, 9],
    output: 10,
  },
  {
    input: [10, 5, 40, 40.3],
    output: 40.3,
  },
  {
    input: [-5, -2, -1, -11],
    output: -1,
  },
  {
    input: [42],
    output: 42,
  },
  {
    input: [1000, 8],
    output: 1000,
  },
];

describe("Max Value", () => {
  tests.forEach((t, i) => {
    test(`Test ${i}`, () => {
      expect(maxValue(t.input)).toBe(t.output);
    });
  });
});
