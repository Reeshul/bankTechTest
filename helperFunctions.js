export const dateArrayToString = ([Day, Month, Year]) =>
  new Date(Year, Month - 1, Day).toLocaleDateString("en-GB");

module.exports = helperFunctions;
