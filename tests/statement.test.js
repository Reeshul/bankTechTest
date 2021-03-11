const Account = require("../src/Account");
const helpers = require("../helpers/helpers");

describe("Statement", () => {
  let newKitty;
  beforeEach(() => {
    newKitty = new Account();
  });
  it("prints statement header if no deposits or withdrawals made", () => {
    expect(newKitty.printStatement()).toEqual(`${helpers.statementHeader}`);
  });
  it("prints a credit transaction if a deposit of 2000 is made", () => {
    let depositAmount = 2000;
    newKitty.deposit(depositAmount);
    expect(newKitty.printStatement()).toEqual(
      `${helpers.statementHeader}\n` +
        `${helpers.todaysDate()} || 2000.00 || || 2000.00`
    );
  });
  it("prints a debit and credit transaction if a deposit of 2000 is made followed by a 500 withdrawal", () => {
    let depositAmount = 2000;
    let withdrawalAmount = 500;
    newKitty.deposit(depositAmount);
    newKitty.withdraw(withdrawalAmount);
    expect(newKitty.printStatement()).toEqual(
      `${helpers.statementHeader}\n` +
        `${helpers.todaysDate()} || || 500.00 || 1500.00\n` +
        `${helpers.todaysDate()} || 2000.00 || || 2000.00`
    );
  });
});
