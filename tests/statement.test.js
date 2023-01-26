const Statement = require('../lib/statement.js')
const Account = require('../lib/account.js')

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2020, 3, 1))
});

afterAll(() => {
  jest.useRealTimers();
});

describe("statement", () => {
  it("returns all transactions", () => {
    const statement = new Statement();
    const account = new Account();
    account.deposit(1296.50);
    account.withdraw(456);
    const newStatement = statement.formatStatement(account);
    const statementDate = new Date(2020, 3, 1).toLocaleDateString();

    expect(newStatement).toContain('date || credit || debit || balance');
    expect(newStatement).toContain(`${statementDate} || 1296.50 || 1296.50`);
    expect(newStatement).toContain(`${statementDate} || 456.00 || 840.50`);

    expect(account.accountBalance()).toEqual(840.50)
  });
});