#include <stdio.h>
#include <string.h>
#include "utils.h"

struct simulation
{
    char account_type[50];
    int months_yield_time;
    float initial_capital;
    float interest_rate;
};


int main(void)
{
    int choice;
    float amount;
    struct simulation sim;

    printf("Please choose your account type:\n");
    printf("1. Savings account\n");
    printf("2. Fixed income fund account\n");
    printf("0. Exit\n");
    if (scanf("%d", &choice) != 1)
    {
        printf("Invalid input\n");
        return 1;
    }
    switch (choice)
    {
        case 1:
            sim.interest_rate = 0.05;
            strcpy(sim.account_type, "Savings account");
            break;
        
        case 2:
            sim.interest_rate = 0.1;
            strcpy(sim.account_type, "Fixed income fund account");
            break;
        
        case 0:
            printf("Finishing program...");
            return 0;
        
        default:
            printf("Error, choice a valid option.");
            return 1;
    }

    printf("Please enter starting capital: ");
    if (scanf("%f", &sim.initial_capital) != 1)
    {
        printf("Invalid input\n");
        return 1;
    }

    printf("Please enter yield_time (months): ");
    if (scanf("%d", &sim.months_yield_time) != 1)
    {
        printf("Invalid input\n");
        return 1;
    }

    amount = compound_interest(sim.initial_capital, sim.interest_rate, sim.months_yield_time);

    printf("Account Type:    %s\n", sim.account_type);
    printf("Initial Capital: %.2f\n", sim.initial_capital);
    printf("Interest Rate:   %.2f%%\n", sim.interest_rate * 100);
    printf("Yield Time:      %d months\n", sim.months_yield_time);
    printf("Final Amount:    %.2f\n", amount);

    return 0;
}