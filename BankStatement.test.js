"use-strict";

const BankStatement = require("./BankStatement");

let newStatament;

describe("#printStatament", () => {
  beforeEach(() => {
    newStatement = new BankStatement();
  });
  it("prints a balance of 1000 if no deposits or withdrawals made", () => {
    expect(newStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n10/01/2012 || 1000.00 || || 1000.00"
    );
  });
  it("prints a balance of 3000 if a deposit of 2000 is made", () => {
    let depositAmount = 2000;
    let d = [13, 1, 2012];
    newStatement.deposit(depositAmount, d);
    expect(newStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"
    );
  });
});
