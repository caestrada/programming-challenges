import { isPrime } from "./is-prime";

const tests = [
  {
    input: "2c3a1t",
    output: "ccaaat",
  },
  {
    input: "4s2b",
    output: "ccaaat",
  },
  {
    input: "2p1o5p",
    output: "ppoppppp",
  },
  {
    input: "3n12e2z",
    output: "nnneeeeeeeeeeeezz",
  },
  {
    input: "127y",
    output:
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  },
];

describe("Uncompress", () => {
  tests.forEach((t, i) => {
    test(`Test ${i}`, () => {
      expect(isPrime(t.input)).toBe(t.output);
    });
  });
});
