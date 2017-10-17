import tinyColor from "tinycolor2";

export const generateReadableColor = color => {
  const outputColor = tinyColor
    .mostReadable(color, ["#000000", "#FFFFFF"])
    .toHex();
  console.log(outputColor);
  return outputColor;
};
