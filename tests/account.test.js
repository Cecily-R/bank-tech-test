const Account = require('../lib/account.js')

xdescribe("Account", () => {
  describe("accountBalance", () => {
    it ("returns the inital account balance", () => {
      let account = new Account()
      
      expect(account.accountBalance()).toEqual(0);
    })

    it("returns account balance following deposits", () => {
      let account = new Account();
      account.deposit(1000.00)
      account.deposit(51.19)
      expect(account.accountBalance()).toEqual(1051.19);
    })
  }

  //   it ("returns new account balance following withdrawals and deposits", () => {
  //     let account = new Account();
  //     account.depositAmount(50.62)
  //     account.withdrawAmount(20.96)
  //     account.withdrawAmount(125.00)

  //     expect(account.accountBalance()).toEqual(-53.42)
  //   })
  // })

  // describe("transactionHistory", () => {
  //   it("stores withdrawals and deposits", () => {
  //     let account = new Account(); 
  //     account.deposit

  //   