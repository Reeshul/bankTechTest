const helpers = require("../helpers/helpers");
const Transaction = require("./Transaction");
const Statement = require("./Statement");

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.checkValidInput(amount);
    this.balance += this.roundDownToTwoDecimalPlaces(amount);
    this.pushCreditTransaction(this.roundDownToTwoDecimalPlaces(amount));
  }

  pushCreditTransaction(amount) {
    this.transactions.push(
      new Transaction(
        helpers.todaysDate(),
        "credit",
        amount.toFixed(2),
        this.balance.toFixed(2)
      )
    );
  }

  withdraw(amount) {
    this.checkValidInput(amount);
    this.checkSufficientFunds(amount);
    this.balance -= this.roundDownToTwoDecimalPlaces(amount);
    this.pushDebitTransaction(this.roundDownToTwoDecimalPlaces(amount));
  }

  pushDebitTransaction(amount) {
    const withdrawalAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.transactions.push(
      new Transaction(
        helpers.todaysDate(),
        "debit",
        withdrawalAmount,
        currentBalance
      )
    );
  }

  printStatement() {
    return new Statement(this.transactions).statement;
  }

  checkValidInput(amount) {
    if (typeof amount !== "number") {
      throw new Error("Input must be a number");
    }
  }

  checkSufficientFunds(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
  }

  roundDownToTwoDecimalPlaces(num) {
    return Math.floor(num * 100) / 100;
  }
}

kitty = new Account();

module.exports = Account;
