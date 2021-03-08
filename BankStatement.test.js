const BankStatement = require("./BankStatement");

let newStatement = new BankStatement();

describe("#printStatament", () => {
  it("prints a balance of 1000 if no deposits or withdrawals made", () => {
    expect(newStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n10/01/2012 || 1000.00 || || 1000.00"
    );
  });
});
