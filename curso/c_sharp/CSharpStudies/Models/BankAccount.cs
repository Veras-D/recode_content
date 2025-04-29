using CSharpStudies.Services;
using System;

namespace CSharpStudies.Models
{
    class BankAccount
    {
        private static int s_accountNumberSeed = 1234567890;
        public string AccountNumber { get; }
        public string Owner { get; }
        public decimal Balance { get; private set; }
        protected readonly ConsoleLogger _logger;

        public BankAccount(string owner, decimal initialBalance, ConsoleLogger logger)
        {
            Owner = string.IsNullOrEmpty(owner)
                ? throw new ArgumentException("Owner can't be null or empty!", nameof(owner))
                : owner;

            Balance = initialBalance < 0
                ? throw new ArgumentException("Initial balance can't be negative!", nameof(initialBalance))
                : initialBalance;

            _logger = logger ?? throw new ArgumentNullException(nameof(logger), "Logger can't be null!");

            AccountNumber = $"ACCT-{s_accountNumberSeed:D6}";
            s_accountNumberSeed++;

            _logger.LogInfo($"✅ Account #{AccountNumber} created for {Owner} with initial balance {Balance:C}");
        }

        public void Deposit(decimal amount)
        {
            if (amount < 0)
            {
                _logger.LogError("Deposit amount can't be negative!");
                throw new ArgumentException("Deposit amount can't be negative!", nameof(amount));
            }

            _logger.LogInfo($"{Owner} deposited {amount:c}.");
            Balance += amount;
        }

        public void Withdraw(decimal amount)
        {
            if (amount < 0)
            {
                _logger.LogError("Withdraw amount can't be negative!");
                throw new ArgumentException("Withdraw amount can't be negative", nameof(amount));
            }
            if (amount > Balance)
            {
                _logger.LogError("Withdraw amount can't be bigger that balance amount!");
                throw new ArgumentException("Withdraw amount can't be bigger that balance amount!", nameof(amount));
            }
            
            _logger.LogWarning($"{Owner} withdraw {amount:c}.");
            Balance -= amount;
        }

        public void Tranfer(BankAccount sendTo, decimal amount)
        {
            Withdraw(amount);
            sendTo.Deposit(amount);
            _logger.LogWarning($"{Owner} transfer {amount:c} to {sendTo.Owner}");
        }

        public virtual void PerformMonthEndTransactions() { }
    }
}