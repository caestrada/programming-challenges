import { compress } from "./compress";

const tests = [
  {
    input: "ccaaatsss",
    output: "2c3at3s",
  },
  {
    input: "ssssbbz",
    output: "4s2bz",
  },
  {
    input: "ppoppppp",
    output: "2po5p",
  },
  {
    input: "nnneeeeeeeeeeeezz",
    output: "3n12e2z",
  },
  {
    input:
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
    output: "127y",
  },
];

describe("Compress", () => {
  tests.forEach((t, i) => {
    test(`Test ${i}`, () => {
      expect(compress(t.input)).toBe(t.output);
    });
  });
});
