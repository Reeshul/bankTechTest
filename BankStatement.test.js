"use-strict";

const BankStatement = require("./BankStatement");

let newStatement;
let depositAmount;
let depositDate;
let withdrawalAmount;
let withdrawalDate;

describe("#printStatament", () => {
  beforeEach(() => {
    newStatement = new BankStatement();
    depositAmount = 2000;
    depositDate = [13, 1, 2012];
    withdrawalAmount = 500;
    withdrawalDate = [14, 1, 2012];
  });
  it("prints a balance of 1000 if no deposits or withdrawals made", () => {
    expect(newStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n" +
        "10/01/2012 || 1000.00 || || 1000.00"
    );
  });
  it("prints a balance of 3000 if a deposit of 2000 is made", () => {
    newStatement.deposit(depositAmount, depositDate);
    expect(newStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n" +
        "13/01/2012 || 2000.00 || || 3000.00\n" +
        "10/01/2012 || 1000.00 || || 1000.00"
    );
  });
  it("prints a balance of 2500 if a deposit of 2000 is made followed by a 500 withdrawal", () => {
    newStatement.deposit(depositAmount, depositDate);
    newStatement.withdraw(withdrawalAmount, withdrawalDate);
    expect(newStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n" +
        "14/01/2012 || || 500.00 || 2500.00\n" +
        "13/01/2012 || 2000.00 || || 3000.00\n" +
        "10/01/2012 || 1000.00 || || 1000.00"
    );
  });
});
