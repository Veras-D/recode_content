#include <stdio.h>

struct car
{
    char mark[50];
    float fabric_price;
    float dealer_percentage;
    float tax_percentage;
};


int main(void)
{
    struct car nissan = {"Nissan", 4000, 0.28, 0.45};
    float final_price_car;

    final_price_car = nissan.fabric_price * (1 + nissan.dealer_percentage) * (1 + nissan.tax_percentage);

    printf("Car Details:\n");
    printf("Brand:         %s\n", nissan.mark);
    printf("Fabric Price:  $%.2f\n", nissan.fabric_price);
    printf("Dealer Margin: %.2f%%\n", nissan.dealer_percentage * 100);
    printf("Taxes:         %.2f%%\n", nissan.tax_percentage * 100);
    printf("Final Price:   $%.2f\n", final_price_car);
    return 0;
}