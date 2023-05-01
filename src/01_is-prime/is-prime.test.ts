import { isPrime } from "./is-prime";

const tests = [
  {
    input: 2,
    output: true,
  },
  {
    input: 3,
    output: true,
  },
  {
    input: 4,
    output: false,
  },
  {
    input: 5,
    output: true,
  },
  {
    input: 6,
    output: false,
  },
  {
    input: 7,
    output: true,
  },
  {
    input: 8,
    output: false,
  },
  {
    input: 25,
    output: false,
  },
  {
    input: 31,
    output: true,
  },
  {
    input: 2017,
    output: true,
  },
  {
    input: 2048,
    output: false,
  },
  {
    input: 1,
    output: false,
  },
  {
    input: 713,
    output: false,
  },
];

describe("Max Value", () => {
  tests.forEach((t, i) => {
    test(`Test ${i}`, () => {
      expect(isPrime(t.input)).toBe(t.output);
    });
  });
});
