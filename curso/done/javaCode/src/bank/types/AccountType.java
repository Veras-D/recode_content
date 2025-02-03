package bank.types;

public enum AccountType {
    SAVINGS(0.02),
    CHECKING(0.01), 
    BUSINESS(0.03); 

    private final double interestRate;

    AccountType(double interestRate) {
        this.interestRate = interestRate;
    }

    public double getInterestRate() {
        return interestRate;
    }
}
