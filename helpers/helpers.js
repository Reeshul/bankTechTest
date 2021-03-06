const helpers = {
  todaysDate: () => {
    const today = new Date();
    const DD = today.getDate().toString().padStart(2, "0");
    const MM = (today.getMonth() + 1).toString().padStart(2, "0");
    const YYYY = today.getFullYear();
    return `${DD}/${MM}/${YYYY}`;
  },
  statementHeader: "date || credit || debit || balance",
};

module.exports = helpers;
