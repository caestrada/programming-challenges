export const uncompress = (s: string) => {
  const numbers = "0123456789";
  const results = [];

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (numbers.includes(char)) continue;

    let num = Number(s.slice(i, j));
    for (let count = 0; count < num; count++) {
      results.push(char);
    }
    i = j + 1;
  }

  return results.join("");
};
