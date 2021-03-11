const Transaction = require("../src/transaction");

describe("Transaction", () => {
  it("the deposit amount,date and balance are passed into transactions", () => {
    const transaction = new Transaction("13/01/2012", "credit", 7.77, 14.44);
    expect(transaction.date).toEqual("13/01/2012");
    expect(transaction.type).toEqual("credit");
    expect(transaction.amount).toEqual(7.77);
    expect(transaction.balance).toEqual(14.44);
  });
});
