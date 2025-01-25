package src.calculator;

import java.util.Set;

public class Calculator {
    private String name;
    

    public Calculator(String name) {
        this.name = name;
        System.out.println("Calculator \"" + name + "\" has been initialized.");
    }

    public float addition(float x, float y) {
        return x + y;
    }

    public float subtraction(float x, float y) {
        return x - y;
    }

    public float multiplication(float x, float y) {
        return x * y;
    }

    public float division(float x, float y) {
        if (y == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
        return x / y;
    }

    public float power(float x, float y) {
        return (float) Math.pow(x, y);
    }

    private void validateNumbers(float x, float y) {
        if (Float.isNaN(x) || Float.isNaN(y)) {
            throw new IllegalArgumentException("Invalid number(s): NaN detected (" + x + ", " + y + ").");
        }
        if (Float.isInfinite(x) || Float.isInfinite(y)) {
            throw new IllegalArgumentException("Invalid number(s): Infinite value(s) detected (" + x + ", " + y + ").");
        }
    }    

    private void validateOperator(String operator) {
        Set<String> validOperators = Set.of("+", "-", "*", "/", "^");
        if (!validOperators.contains(operator)) {
            throw new IllegalArgumentException("Invalid operator:" + operator);
        }
    }

    public float calculate(float x, float y, String operator) {
        validateNumbers(x, y);
        validateOperator(operator);

        switch (operator) {
            case "+" -> {
                return addition(x, y);
            }
            case "-" -> {
                return subtraction(x, y);
            }
            case "*" -> {
                return multiplication(x, y);
            }
            case "/" -> {
                return division(x, y);
            }
            case "^" -> {
                return power(x, y);
            }
            default -> throw new IllegalArgumentException("Invalid operator:" + operator);
        }
    }
}