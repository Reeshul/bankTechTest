"use-strict";

const BankStatement = require("./BankStatement");

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
    it("prints a balance of 3000 if a deposit of 2000 is made on 13/01/2012", () => {
      newStatement.deposit(depositAmount, dateToString(13, 1, 2012));
      expect(newStatement.printStatement()).toEqual(
        "date || credit || debit || balance\n" +
          "13/01/2012 || 2000.00 || || 3000.00\n" +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
    it("prints a balance of 2500 if a deposit of 2000 is made on 13/01/2012 and a 500 withdrawal on 14/01/2012", () => {
      newStatement.deposit(depositAmount, dateToString(13, 1, 2012));
      newStatement.withdraw(withdrawalAmount, dateToString(14, 1, 2012));
      expect(newStatement.printStatement()).toEqual(
        "date || credit || debit || balance\n" +
          "14/01/2012 || || 500.00 || 2500.00\n" +
          "13/01/2012 || 2000.00 || || 3000.00\n" +
          "10/01/2012 || 1000.00 || || 1000.00"
      );
    });
  });

  describe("#deposit", () => {
    beforeEach(() => {
      depositAmount = 333;
    });
    it("balance updates to 1333 if 333 is deposited", () => {
      newStatement.deposit(depositAmount);
      expect(newStatement.balance).toEqual(1333);
    });
  });
});

const dateToString = (dd, mm, yyyy) => {
  const date = new Date(yyyy, mm, dd);
  const DD = date.getDate().toString().padStart(2, "0");
  const MM = date.getMonth().toString().padStart(2, "0");
  const YYYY = date.getFullYear();
  return `${DD}/${MM}/${YYYY}`;
};
