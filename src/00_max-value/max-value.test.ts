import { maxValue } from "./max-value";

test("00_max-value", () => {
  const input = [4, 7, 2, 8, 10, 9];
  const output = 10;
  expect(maxValue(input)).toBe(10);
});
