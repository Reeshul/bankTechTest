const convertDate = ([month, date, year]) =>
  new Date().toLocaleDateString("en-US").split("/");

const convertDateToString = (Day, Month, Year) => {
  return new Date(Year, Month, Day).toLocaleDateString("en-GB");
};
