const Deposit = require('../lib/deposit.js')


beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2020, 3, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Deposit", () => {
  it ("returns the amount deposited", () => {
    const deposit = new Deposit(2500.00)

    expect(deposit.amount()).toEqual(2500.00)
  })

  it("returns the date of deposit", () => {
    const deposit = new Deposit(2500.00);
    
    expect(deposit.date).toEqual(new Date(2020, 3, 1))
  })
})