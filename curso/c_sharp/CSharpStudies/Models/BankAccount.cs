// Todo:
// - AddingNewEventArgs munber
// - Add loggs
// - AddingNewEventArgs tranfes
// - add other type of accounts
using CSharpStudies.Services;

namespace CSharpStudies.Models
{
    class BankAccount(string owner, decimal initialBalance, ConsoleLogger logger)
    {
        public string Owner { get; } = string.IsNullOrEmpty(owner)
            ? throw new ArgumentException("Owner can't be null or empty!", nameof(owner))
            : owner;

        public decimal Balance { get; private set; } = initialBalance < 0
            ? throw new ArgumentException("Initial balance can't be negative!", nameof(initialBalance))
            : initialBalance;

        private readonly ConsoleLogger _logger = logger
            ?? throw new ArgumentNullException(nameof(logger), "Logger can't be null!");

        public BankAccount()
        {
            _logger.LogInfo($"✅ Account created for {Owner} with initial balance {Balance:C}");
        }

        public void Deposit(decimal amount)
        {
            if (amount < 0)
            {
                throw new ArgumentException("Deposit amount can't be negative!", nameof(amount));
            }

            Balance += amount;
        }

        public void Withdraw(decimal amount)
        {
            if (amount < 0)
            {
                throw new ArgumentException("Withdraw amount can't be negative", nameof(amount));
            }
            if (amount > Balance)
            {
                throw new ArgumentException("Withdraw amount can't be bigger that balance amount!", nameof(amount));
            }
            
            Balance -= amount;
        }
    }
}