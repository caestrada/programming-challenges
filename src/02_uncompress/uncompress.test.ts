import { uncompress } from "./uncompress";

const tests = [
  {
    input: "2c3a1t",
    output: "ccaaat",
  },
  {
    input: "4s2b",
    output: "ssssbb",
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
      expect(uncompress(t.input)).toBe(t.output);
    });
  });
});
