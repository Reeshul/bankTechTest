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
});
