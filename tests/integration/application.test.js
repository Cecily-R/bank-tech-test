const Deposit = require('../../lib/deposit.js')
const Withdrawal = require('../../lib/withdrawal.js')
const Account = require('../../lib/account.js')
const Statement = require('../../lib/statement.js')

beforeAll(() => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date(2020, 3, 1))
})

afterAll(() => {
  jest.useRealTimers()
})

describe('application', () => {
  it('returns a correct statement of withdrawal and deposits', () => {
    const statement = new Statement()
    const account = new Account()
    account.deposit(9000)
    account.withdraw(456)
    account.withdraw(250)
    account.deposit(20.95)

    const newStatement = statement.formatStatement(account)
    const statementDate = new Date(2020, 3, 1).toLocaleDateString()

    expect(newStatement).toContain('date || credit || debit || balance')
    expect(newStatement).toContain(`${statementDate} || 9000.00 ||  || 9000.00`)
    expect(newStatement).toContain(`${statementDate} ||  || 456.00 || 8544.00`)
    expect(newStatement).toContain(`${statementDate} ||  || 250.00 || 8294.00`)
    expect(newStatement).toContain(`${statementDate} || 20.95 ||  || 8314.95`)

    expect(account.accountBalance()).toEqual(8314.95)
  })
})
