function noAccentAndToLower(string) {
  const stringLow = string.toLowerCase();
  const ArrayLow = stringLow.split("");
  let result = "";
  for (let i = 0; i < ArrayLow.length; i += 1) {
    if (ArrayLow[i] === "é") {
      ArrayLow[i] = "e";
    }
  }
  result = ArrayLow.join("");
  return result;
}

export default noAccentAndToLower;
