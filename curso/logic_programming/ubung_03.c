#include <stdio.h>

struct simulation
{
    int account_type;
    int months_yield_time;
    float initial_capital;
    float interest_rate;
};


int main(void)
{
    int choice;
    float tax;

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
        tax = 0.05;
        break;
    
    case 2:
        tax = 0.1;
        break;
    
    case 0:
        printf("Finishing program...");
        return 0;
    
    default:
        printf("Error, choice a valid option.");
        return 1;
    }

    

    return 0;
}