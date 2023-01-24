# bank-tech-test

## My Approach

<img width="864" alt="Screenshot 2023-01-24 at 14 55 25" src="https://user-images.githubusercontent.com/104351258/214328877-59c85944-c1cf-4d3a-947d-73fc738c9019.png">

When I first started planning how I would go about implementing the Bank Tech Test criteria, I knew I wanted one class which would take care of formatting and producing the bank statement, another to deal with the deposits, and another to deal with the withdrawals.

As I would nned to keep track of the date the transaction took place, as well as the updated account balance, I thought that creating instances of the class every time they were called and pushing them into an array containing transaction history in the main account class would be the best way to go about this.

As I went about implementing my plan, each class got gradually heavier as factors which I initially had not accounted for came out of the woodworks. 

While there are areas in which I could streamline my approach and avoid repetition, overall, I'm happy with the structure of the programme and how the classes interact with one another. 

## My Structure 

Account class: 
 - accountBalance function: balance is initialised within the constructor of the class, and returned in the function. This function is then called within other functions and tests to return the account balance following a transaction.
 - withdraw function: this function handles any withdrawal transaction, to be passed to the withdrawal class. It then pushes any instance of the class into the transaction array and reassigns the account balance based on what is fed back from the withdrawal class. 
 - deposit function: this function works exactly the same as the withdraw function, however working directly with the deposit class instead. 
 - statement function: this loops through the transactions array, formatting each transaction and adding the header.

Desposit / Withdrawal classes: 
- amount function: this function returns the amount passed in when a new instance of the class is created.
- updatedBalance function: this function updates the current account balance passed through the account class by adding or subtracting the deposited or withdrawn amount.  
  
