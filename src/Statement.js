const helpers = require("../helpers/helpers");

class Statement {
  constructor(transactions) {
    this.printTransactions(transactions);
  }
  printTransactions(transactions) {
    this.statement = helpers.statementHeader;
    transactions.reverse().forEach((transaction) => {
      transaction.type === "credit"
        ? (this.statement += `\n${transaction.date} || ${transaction.amount} || || ${transaction.balance}`)
        : (this.statement += `\n${transaction.date} || || ${transaction.amount} || ${transaction.balance}`);
    });
    return this.statement;
  }
}

module.exports = Statement;
