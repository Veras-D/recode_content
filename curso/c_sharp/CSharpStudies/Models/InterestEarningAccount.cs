using CSharpStudies.Services;
using System;

namespace CSharpStudies.Models
{
    class InterestEarningAccount : BankAccount
    {
        public InterestEarningAccount(string owner, decimal initialBalance, decimal interestRate, ConsoleLogger logger)
            : base(owner, initialBalance, logger)
        {
            _logger.LogInfo($"✅ Interest Earning Account created for {Owner} with initial balance {Balance:C}");
        }

        public override void PerformMonthEndTransactions()
        {
            if (Balance > 500m)
            {
                decimal interest = Balance * 0.02m;
                Deposit(interest);
                _logger.LogInfo($"Apply monthly interest to {Owner}.");
            }
        }
    }
}