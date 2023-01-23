const Account = require('../lib/account.js')

describe("Account", () => {
  describe("accountBalance", () => {
    it ("returns the inital account balance", () => {
      let account = new Account()
      
      expect(account.accountBalance()).toEqual(0);
    })

    it("returns account balance following deposits", () => {
      let account = new Account();
      account.deposit(1000.45);
      account.deposit(50.74);

      expect(account.accountBalance()).toEqual(1051.19);
    })

    it ("returns new account balance following withdrawals and deposits", () => {
      let account = new Account();
      account.deposit(50.62)
      account.withdraw(20.96)
      account.withdraw(125)

      expect(account.accountBalance()).toEqual(-53.42)
    })
  })
})