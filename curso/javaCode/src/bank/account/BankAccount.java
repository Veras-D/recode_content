package bank.account;

import bank.types.AccountStatus;
import bank.types.AccountType;
import bank.types.User;

public class BankAccount {
    public int accountNumber;
    protected AccountType accountType;
    private User user;
    private double balance;
    private AccountStatus accountStatus;

    public BankAccount(int accountNumber, AccountType accountType, User user) {
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.user = user;
        this.balance = 0;
        this.accountStatus = AccountStatus.INACTIVE;
    }
    
    public double getBalance() {
        return this.balance;
    }

    private void setBalance(double balance) {
        if(balance < 0) {
            throw new IllegalArgumentException("balance must be non-negative");
        }
        this.balance = balance;
    }

    public AccountStatus getAccountStatus() {
        return this.accountStatus;
    }

    private void setAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
    }

    public double deposit(double amount) {
        if(amount < 0) {
            throw new IllegalArgumentException("amount must be positive");
        }
        if(getAccountStatus() == AccountStatus.CLOSED || getAccountStatus() == AccountStatus.INACTIVE) {
            throw new IllegalStateException("Account is inactive or closed");
        }
        setBalance(getBalance() + amount);
        return getBalance();
    }

    public double withdraw(double amount) {
        if(amount < 0) {
            throw new IllegalArgumentException("amount must be positive");
        }
        if(getBalance() < amount) {
            throw new IllegalStateException("Insufficient funds");
        }
        setBalance(getBalance() - amount);
        return getBalance();
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User newUser) {
        this.user = newUser;
    }

    public int getAccountNumber() {
        return this.accountNumber;
    }

    public AccountType getAccountType() {
        return this.accountType;
    }

    private void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public void openAccount(AccountType accountType) {
        if(this.accountStatus == AccountStatus.INACTIVE) {
            setAccountStatus(AccountStatus.ACTIVE);
            setAccountType(accountType);
        } else {
            throw new IllegalStateException("Account is already open");
        }
    }

    public void closeAccount() {
        if(this.accountStatus == AccountStatus.ACTIVE) {
            setAccountStatus(AccountStatus.CLOSED);
        } else {
            throw new IllegalStateException("Account is already closed");
        }
    }

    public boolean isAccountOwner(User user) {
        return this.user.equals(user);
    }

    public void bankTransfer(BankAccount account, double value) {
        if(getAccountStatus() == AccountStatus.ACTIVE && account.getAccountStatus() == AccountStatus.ACTIVE) {
            withdraw(value);
            account.deposit(value);
        }
        else {
            throw new IllegalStateException("One or both accounts are inactive or closed");
        }
    }
}
