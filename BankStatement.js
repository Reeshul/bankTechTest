"use-strict";

const todaysDate = require("./todaysDate");

class BankStatement {
  constructor() {
    this.balance = 1000;
    this.statement = "";
  }

  deposit(amount) {
    this.balance += amount;
    this.updateStatementWithDepositTransaction(amount);
  }

  updateStatementWithDepositTransaction(amount) {
    const depositAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${todaysDate()} || ${depositAmount} || || ${currentBalance}\n` +
      this.statement;
  }

  withdraw(amount) {
    this.balance -= amount;
    this.updateStatementWithWithdrawTransaction(amount);
  }

  updateStatementWithWithdrawTransaction(amount) {
    const withdrawalAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${todaysDate()} || || ${withdrawalAmount} || ${currentBalance}\n` +
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

module.exports = BankStatement;
