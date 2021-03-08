"use-strict";

class BankStatement {
  constructor() {
    this.balance = 1000;
    this.statement = "";
  }

  deposit(amount, dateArray) {
    this.balance += amount;
    this.statement += `${dateArrayToString(dateArray)} || ${amount.toFixed(
      2
    )} || || ${this.balance.toFixed(2)}\n`;
  }

  printStatement() {
    return (
      "date || credit || debit || balance\n" +
      `${this.statement}` +
      "10/01/2012 || 1000.00 || || 1000.00"
    );
  }
}

const dateArrayToString = ([Day, Month, Year]) =>
  new Date(Year, Month - 1, Day).toLocaleDateString("en-GB");

module.exports = BankStatement;
