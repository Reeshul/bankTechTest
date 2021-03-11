const helpers = require("../helpers/helpers");

function Statement(transactions) {
  this.printTransactions(transactions);
}
Statement.prototype.printTransactions = function (transactions) {
  this.statement = helpers.statementHeader;
  transactions.reverse().forEach((transaction) => {
    transaction.type === "credit"
      ? (this.statement += `\n${transaction.date} || ${transaction.amount} || || ${transaction.balance}`)
      : (this.statement += `\n${transaction.date} || || ${transaction.amount} || ${transaction.balance}`);
  });
  return this.statement;
};

module.exports = Statement;
