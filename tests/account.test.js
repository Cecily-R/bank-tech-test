const Account = require('../lib/account.js')

describe("Account", () => {
  describe("accountBalance", () => {
    it ("returns the inital account balance", () => {
      let account = new Account();
      
      expect(account.accountBalance()).toEqual(0);
    });

    // it("returns account balance following deposits", () => {
    //   let account = new Account();
    //   account.deposit(1000.00);
    //   account.deposit(51.19);
    //   expect(account.accountBalance()).toEqual(1051.19);
    // });
  });
});