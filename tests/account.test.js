const Account = require('../lib/account.js')

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2020, 3, 1))
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Account", () => {
  describe("statement", () => {
    it("returns all transactions", () => {
      const account = new Account();
      account.deposit(1296.50);
      account.withdraw(456);
      const statement = account.statement();
      const statementDate = new Date(2020, 3, 1).toLocaleDateString();

      expect(statement).toContain('date || credit || debit || balance');
      expect(statement).toContain(`${statementDate} || 1296.50 || 1296.50`);
      expect(statement).toContain(`${statementDate} || 456.00 || 840.50`);

      expect(account.accountBalance()).toEqual(840.50)
    });
  });
  
  describe("accountBalance", () => {
    it ("returns the inital account balance", () => {
      let account = new Account();
      
      expect(account.accountBalance()).toEqual(0);
    });
  });

  describe("deposit", () => {
    it ("returns updated account balance following a deposit", () => {
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
 
  describe("withdraw", () => {
    it("returns updated account balance following a withdrawal", () => {
      const account = new Account();
      account.withdraw(456);

      expect(account.accountBalance()).toEqual(-456);
    });
  });
}); 