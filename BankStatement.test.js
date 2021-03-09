"use-strict";

const BankStatement = require("./BankStatement");
const todaysDate = require("./todaysDate");

let newStatement;
let depositAmount;
let withdrawalAmount;

describe("Bank Statement", () => {
  beforeEach(() => {
    newStatement = new BankStatement();
  });
  describe("#printStatament", () => {
    beforeEach(() => {
      depositAmount = 2000;
      withdrawalAmount = 500;
    });
    it("prints a balance of 1000 if no deposits or withdrawals made", () => {
      expect(newStatement.printStatement()).toEqual(
        "date || credit || debit || balance\n" +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
    it("prints a balance of 3000 if a deposit of 2000", () => {
      newStatement.deposit(depositAmount);
      expect(newStatement.printStatement()).toEqual(
        "date || credit || debit || balance\n" +
          `${todaysDate()} || 2000.00 || || 3000.00\n` +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
    it("prints a balance of 2500 if a deposit of 2000 is made followed by a 500 withdrawal", () => {
      newStatement.deposit(depositAmount);
      newStatement.withdraw(withdrawalAmount);
      expect(newStatement.printStatement()).toEqual(
        "date || credit || debit || balance\n" +
          `${todaysDate()} || || 500.00 || 2500.00\n` +
          `${todaysDate()} || 2000.00 || || 3000.00\n` +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
  });

  describe("#deposit", () => {
    it("balance updates to 1333 if 333 is deposited", () => {
      newStatement.deposit(333);
      expect(newStatement.balance).toEqual(1333);
    });
  });

  describe("#withdrawal", () => {
    it("balance updates to 333 if 667 is withdrawn", () => {
      newStatement.withdraw(667);
      expect(newStatement.balance).toEqual(333);
    });
  });
});
