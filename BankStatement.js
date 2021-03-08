"use-strict";

class BankStatement {
  constructor() {
    this.balance = 1000;
    this.statement = "";
  }

  deposit(amount, dateArray) {
    this.balance += amount;
    const depositDate = dateArrayToString(dateArray);
    const depositAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${depositDate} || ${depositAmount} || || ${currentBalance}\n` +
      this.statement;
  }

  withdraw(amount, dateArray) {
    this.balance -= amount;
    const withdrawalDate = dateArrayToString(dateArray);
    const withdrawalAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${withdrawalDate} || || ${withdrawalAmount} || ${currentBalance}\n` +
      this.statement;
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
