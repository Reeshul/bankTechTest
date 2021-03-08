class BankStatement {
  constructor() {
    this.statement = "";
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
