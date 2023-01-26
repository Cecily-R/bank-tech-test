const Deposit = require('../lib/deposit.js')

class Statement {
  
  formatStatement (account) {
    const formattedHistory = account.transactions.map(transaction => {
      if (transaction instanceof Deposit) {
        return `${transaction.date.toLocaleDateString()} || ${transaction.amount().toFixed(2)} ||  || ${transaction.updatedBalance().toFixed(2)}\n`
      } else {
        return `${transaction.date.toLocaleDateString()} ||  || ${transaction.amount().toFixed(2)} || ${transaction.updatedBalance().toFixed(2)}\n`
      }
    })
    const header = 'date || credit || debit || balance\n'
    return header + formattedHistory.join('')
  };
};

module.exports = Statement
