const Account = require("../src/Account");

describe("edge cases", () => {
  let edgeKitty;
  beforeEach(() => {
    edgeKitty = new Account();
    edgeKitty.balance = 1000;
  });
  it("error is thrown if withdrawal requested is higher than balance", () => {
    expect(() => {
      edgeKitty.withdraw(1001);
    }).toThrow("Insufficient funds");
  });
  it("amount rounded down if more than 2 numbers appear after the decimal point for deposits", () => {
    edgeKitty.deposit(314.159);
    expect(edgeKitty.balance).not.toEqual(1314.16);
    expect(edgeKitty.balance).toEqual(1314.15);
  });
  it("amount rounded down if more than 2 numbers appear after the decimal point for withdrawals", () => {
    edgeKitty.withdraw(141.429);
    expect(edgeKitty.balance).not.toEqual(858.57);
    expect(edgeKitty.balance).toEqual(858.58);
  });
  it("error is thrown if the input in the deposit method is not a number", () => {
    expect(() => {
      edgeKitty.deposit("I am not a number");
    }).toThrow("Input must be a number");
  });
  it("error is thrown if the input in the withdraw method is not a number", () => {
    expect(() => {
      edgeKitty.withdraw("7777");
    }).toThrow("Input must be a number");
  });
});
