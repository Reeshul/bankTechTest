const helpers = {
  todaysDate: () => {
    const today = new Date();
    const DD = today.getDate().toString().padStart(2, "0");
    const MM = (today.getMonth() + 1).toString().padStart(2, "0");
    const YYYY = today.getFullYear();
    return `${DD}/${MM}/${YYYY}`;
  },
  roundDownToTwoDecimalPlaces: (num) => Math.floor(num * 100) / 100,
  statementHeader: "date || credit || debit || balance",
  initialCreditTransaction: "10/01/2012 || 1000.00 || || 1000.00",
};

module.exports = helpers;
