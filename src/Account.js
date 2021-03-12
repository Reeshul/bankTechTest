const helpers = require("../helpers/helpers");
const Transaction = require("./Transaction");
const Statement = require("./Statement");

function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  this.checkValidInput(amount);
  this.creditBalance(amount);
  this.pushCreditTransaction(amount);
  return this.showBalance();
};

Account.prototype.withdraw = function (amount) {
  this.checkValidInput(amount);
  this.checkSufficientFunds(amount);
  this.debitBalance(amount);
  this.pushDebitTransaction(amount);
  return this.showBalance();
};

Account.prototype.printStatement = function () {
  return new Statement(this.transactions).statement;
};

Account.prototype.creditBalance = function (amount) {
  this.balance += this.roundDownToTwoDecimalPlaces(amount);
};

Account.prototype.pushCreditTransaction = function (amount) {
  this.transactions.push(
    new Transaction(
      helpers.todaysDate(),
      "credit",
      this.roundDownToTwoDecimalPlaces(amount).toFixed(2),
      this.balance.toFixed(2)
    )
  );
};

Account.prototype.debitBalance = function (amount) {
  this.balance -= this.roundDownToTwoDecimalPlaces(amount);
};

Account.prototype.pushDebitTransaction = function (amount) {
  this.transactions.push(
    new Transaction(
      helpers.todaysDate(),
      "debit",
      this.roundDownToTwoDecimalPlaces(amount).toFixed(2),
      this.balance.toFixed(2)
    )
  );
};

Account.prototype.showBalance = function () {
  return `Your balance is: ${this.balance}`;
};

Account.prototype.checkValidInput = (amount) => {
  if (typeof amount !== "number") {
    throw new Error("Input must be a number");
  }
};

Account.prototype.checkSufficientFunds = function (amount) {
  if (amount > this.balance) {
    throw new Error("Insufficient funds");
  }
};

Account.prototype.roundDownToTwoDecimalPlaces = (num) =>
  Math.floor(num * 100) / 100;

global.kitty = new Account();

module.exports = Account;
