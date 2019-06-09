const colorValue = color => COLORS.indexOf(color);

export const value = colors => Number(colors.map(colorValue).join(''));

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
