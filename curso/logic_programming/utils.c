#include "utils.h"

float potencia(float num, int pot)
{
    if (pot <= 0)
    {
        return 1;
    }

    return num * potencia(num, pot - 1);
}

float compound_interest(float capital, float tax, int time)
{
    return capital * potencia(1 + tax, time);

}