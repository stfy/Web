const colors = ["#008CB9", "#009ACC", "#00AEE5", "#23BFF1", "#47D2FF"];
const fortaColors = ["#898989", "#A3A3A3", "#B3B3B3", "#C2C2C2", "#D6D6D6"];

export const colorByIndex = (index) => {
  return fortaColors[index % fortaColors.length];
};
