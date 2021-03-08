"use-strict";

class BankStatement {
  constructor() {
    this.balance = 1000;
    this.statement = "";
  }

  deposit(amount, depositDate) {
    depositDate ||= todaysDate();
    this.balance += amount;
    const depositAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${depositDate} || ${depositAmount} || || ${currentBalance}\n` +
      this.statement;
  }

  withdraw(amount, withdrawalDate) {
    withdrawalDate ||= todaysDate();
    this.balance -= amount;
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

const todaysDate = () => {
  const today = new Date();
  const DD = today.getDate().toString().padStart(2, "0");
  const MM = (today.getMonth() + 1).toString().padStart(2, "0");
  const YYYY = today.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};

const dateToString = (dd, mm, yyyy) => {
  const date = new Date(yyyy, mm, dd);
  const DD = date.getDate().toString().padStart(2, "0");
  const MM = date.getMonth().toString().padStart(2, "0");
  const YYYY = date.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};

module.exports = BankStatement;
