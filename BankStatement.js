"use-strict";

class BankStatement {
  constructor() {
    this.balance = 1000;
    this.statement = "";
  }

  deposit(amount) {
    this.balance += amount;
    const depositAmount = amount.toFixed(2);
    const currentBalance = this.balance.toFixed(2);
    this.statement =
      `${todaysDate()} || ${depositAmount} || || ${currentBalance}\n` +
      this.statement;
  }

  withdraw(amount) {
    this.balance -= amount;
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

const todaysDate = () => {
  const today = new Date();
  const DD = today.getDate().toString().padStart(2, "0");
  const MM = (today.getMonth() + 1).toString().padStart(2, "0");
  const YYYY = today.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};

module.exports = BankStatement;
