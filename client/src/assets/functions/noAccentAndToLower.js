function noAccentAndToLower(string) {
  const stringLow = string.toLowerCase();
  const arrayLow = stringLow.split("");
  let result = "";
  for (let i = 0; i < arrayLow.length; i += 1) {
    if (arrayLow[i] === "é" || arrayLow[i] === "è") {
      arrayLow[i] = "e";
    }
  }
  result = arrayLow.join("");
  return result;
}

export default noAccentAndToLower;
