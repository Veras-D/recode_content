import calculator.Calculator;

public class App {
    public static void main(String[] args) {
        Calculator calculator = new Calculator("Advanced Calculator");

        float num1 = 0.5f;
        float num2 = 2.5f;
        String operator = "/";

        try {
            float result = calculator.calculate(num1, num2, operator);
            System.out.println("Result: " + result);
        } catch (IllegalArgumentException e) {
            System.err.println(e.getMessage());
        }
    }
}
