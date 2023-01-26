const Statement = require('../lib/statement.js')
const Account = require('../lib/account.js')

beforeAll(() => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date(2020, 3, 1))
})

afterAll(() => {
  jest.useRealTimers()
})

describe('statement', () => {
  it('returns an empty statement', () => {
    const statement = new Statement()
    const account = new Account()

    const newStatement = statement.formatStatement(account)
    const statementDate = new Date(2020, 3, 1).toLocaleDateString()

    expect(newStatement).toContain('date || credit || debit || balance')
  })

  it('returns a statement correctly formatted for a deposit', () => {
    const statement = new Statement()
    const account = new Account()

    account.deposit(1296.50)

    const newStatement = statement.formatStatement(account)
    const statementDate = new Date(2020, 3, 1).toLocaleDateString()

    expect(newStatement).toContain('date || credit || debit || balance')
    expect(newStatement).toContain(`${statementDate} || 1296.50 ||  || 1296.50`)
  })

  it('returns a statement correctly formatted for withdrawal', () => {
    const statement = new Statement()
    const account = new Account()

    account.withdraw(250)

    const newStatement = statement.formatStatement(account)
    const statementDate = new Date(2020, 3, 1).toLocaleDateString()

    expect(newStatement).toContain('date || credit || debit || balance')
    expect(newStatement).toContain(`${statementDate} ||  || 250.00 || -250`)
  })
})
