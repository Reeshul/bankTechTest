"use-strict";

const helpers = require("./helpers");

class BankStatement {
  constructor() {
    this.balance = 1000;
    this.statement = "";
  }

  deposit(amount) {
    if (typeof amount !== "number") {
      throw new Error("Funds deposited must be a number");
    } else {
      this.balance += helpers.roundDownToTwoDecimalPlaces(amount);
      this.updateStatementWithDepositTransaction(
        helpers.roundDownToTwoDecimalPlaces(amount)
      );
    }
  }

  updateStatementWithDepositTransaction(amount) {
    const depositAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${helpers.todaysDate()} || ${depositAmount} || || ${currentBalance}\n` +
      this.statement;
  }

  withdraw(amount) {
    if (typeof amount !== "number") {
      throw new Error("Funds withdrawn must be a number");
    } else {
      if (amount <= this.balance) {
        this.balance -= helpers.roundDownToTwoDecimalPlaces(amount);
        this.updateStatementWithWithdrawTransaction(
          helpers.roundDownToTwoDecimalPlaces(amount)
        );
      } else {
        throw new Error("Insufficient funds");
      }
    }
  }

  updateStatementWithWithdrawTransaction(amount) {
    const withdrawalAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${helpers.todaysDate()} || || ${withdrawalAmount} || ${currentBalance}\n` +
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
