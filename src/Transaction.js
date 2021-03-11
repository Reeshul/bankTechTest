class Transaction {
  constructor(date, type, amount, balance) {
    this.date = date;
    this.type = type;
    this.amount = amount;
    this.balance = balance;
  }
}

module.exports = Transaction;
