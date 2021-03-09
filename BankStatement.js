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
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      } else {
        this.balance -= helpers.roundDownToTwoDecimalPlaces(amount);
        this.updateStatementWithWithdrawTransaction(
          helpers.roundDownToTwoDecimalPlaces(amount)
        );
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
    return `${helpers.statementHeader()}\n${
      this.statement
    }${helpers.initialCredit()}`;
  }
}

module.exports = BankStatement;
