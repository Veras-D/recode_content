#include <stdio.h>

struct product
{
    char name[50];
    float price;
    float discount;
};

const float DISCOUNT_25 = 0.25;

int main(void)
{
    struct product skirt = {"skirt", 5.25, DISCOUNT_25};
    float final_price;

    final_price = skirt.price * (1 - skirt.discount);

    printf("Product:       %s\n", skirt.name);
    printf("\nPrice:       $%.2f\n", skirt.price);
    printf("\nDiscount:    %.2f%%\n", skirt.discount * 100);
    printf("\nFinal Price: $%.2f\n", final_price);

    return 0;
}