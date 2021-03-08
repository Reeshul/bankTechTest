const todaysDate = () => {
  const today = new Date();
  const DD = today.getDate().toString().padStart(2, "0");
  const MM = (today.getMonth() + 1).toString().padStart(2, "0");
  const YYYY = today.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};

const dateToString = (dd, mm, yyyy) => {
  const date = new Date(yyyy, mm, dd);
  const DD = date.getDate().toString().padStart(2, "0");
  const MM = date.getMonth().toString().padStart(2, "0");
  const YYYY = date.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};

module.exports = helpers;
