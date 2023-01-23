const Account = require('../lib/account.js')

describe("Account", () => {
  describe("accountBalance", () => {
    it ("returns the inital account balance", () => {
      let account = new Account();
      
      expect(account.accountBalance()).toEqual(0);
    });
  });

  describe("deposit", () => {
    it ("returns updated account balance following deposit", () => {
      const account = new Account();
      account.deposit(239)

      expect(account.accountBalance()).toEqual(239);
    })

    it ("returns updated account balance following several deposits", () => {
      const account = new Account();
      account.deposit(3450.98);
      account.deposit(265);

      expect(account.accountBalance()).toEqual(3715.98)
    });
  });
});  


  // describe("withdraw", () => {
  //   it("returns updated account balance following")
  // })
