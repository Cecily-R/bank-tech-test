const Account = require('../lib/account.js')

describe('Account', () => {
  describe('accountBalance', () => {
    it('returns the inital account balance', () => {
      const account = new Account()

      expect(account.accountBalance()).toEqual(0)
    })
  })

  describe('deposit', () => {
    it('returns updated account balance following a deposit', () => {
      const account = new Account()
      account.deposit(239)

      expect(account.accountBalance()).toEqual(239)
    })

    it('updates and returns updated account balance following several deposits', () => {
      const account = new Account()
      account.deposit(3450.98)
      account.deposit(265)

      expect(account.accountBalance()).toEqual(3715.98)
    })
  })

  describe('withdraw', () => {
    it('updates and returns updated account balance following a withdrawal', () => {
      const account = new Account()
      account.withdraw(456)

      expect(account.accountBalance()).toEqual(-456)
    })
  })
})
