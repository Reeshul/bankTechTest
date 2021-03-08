"use-strict";

const BankStatement = require("./BankStatement");

let newStatement;
let depositAmount;
let depositDate;
let withdrawalAmount;
let withdrawalDate;

describe("Bank Statement", () => {
  beforeEach(() => {
    newStatement = new BankStatement();
  });
  describe("#printStatament", () => {
    beforeEach(() => {
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
          `${todaysDate()} || 2000.00 || || 3000.00\n` +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
    it("prints a balance of 2500 if a deposit of 2000 is made followed by a 500 withdrawal", () => {
      newStatement.deposit(depositAmount, depositDate);
      newStatement.withdraw(withdrawalAmount, withdrawalDate);
      expect(newStatement.printStatement()).toEqual(
        "date || credit || debit || balance\n" +
          `${todaysDate()} || || 500.00 || 2500.00\n` +
          `${todaysDate()} || 2000.00 || || 3000.00\n` +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
  });

  describe("#deposit", () => {
    beforeEach(() => {
      depositAmount = 333;
      depositDate = [8, 3, 2021];
    });
    it("balance updates to 1333 if 333 is deposited", () => {
      newStatement.deposit(depositAmount, depositDate);
      expect(newStatement.balance).toEqual(1333);
    });
  });
});

const todaysDate = () => {
  const today = new Date();
  const DD = today.getDate().toString().padStart(2, "0");
  const MM = (today.getMonth() + 1).toString().padStart(2, "0");
  const YYYY = today.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};
