const Account = require("../src/Account");

describe("Account", () => {
  let newKitty;
  beforeEach(() => {
    newKitty = new Account();
  });
  describe("#deposit", () => {
    it("balance updates to 333 if 333 is deposited", () => {
      newKitty.deposit(333);
      expect(newKitty.balance).toEqual(333);
    });
  });

  describe("#withdrawal", () => {
    it("balance updates to 333 if 667 is withdrawn after a 1000 deposit", () => {
      newKitty.deposit(1000);
      newKitty.withdraw(667);
      expect(newKitty.balance).toEqual(333);
    });
  });
});
