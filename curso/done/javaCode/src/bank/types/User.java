package bank.types;

public class User {
    private String name;
    private final String email;
    private String phoneNumber;
    private String passwordHash;
    private int age;

    public User(String name, String email, String phoneNumber, String password, int age) {
        if (!validateEmail(email)) throw new IllegalArgumentException("Invalid email.");
        if (!validatePhoneNumber(phoneNumber)) throw new IllegalArgumentException("Invalid phone.");
        if (!validateAge(age)) throw new IllegalArgumentException("Invalid age.");
        if (!validatePassword(password)) throw new IllegalArgumentException("Invalid password.");

        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.passwordHash = generateHash(password);
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }

    public String getEmail() {
        return email;
    }

    private boolean validateEmail(String email) {
        return email.matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$");
    }

    private boolean matchsEmails(String email) {
        return getEmail().equals(email);
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    private  void setPhoneNumber(String newPhoneNumber) {
        this.phoneNumber = newPhoneNumber;
    }

    private boolean validatePhoneNumber(String phoneNumber) {
        return phoneNumber.matches("^(\\+?55)?\\s?(\\d{2})?\\s?9?\\d{4}-?\\d{4}$");
    }

    public void updatePhoneNumber(String phoneNumber) {
        if(validatePhoneNumber(phoneNumber)) {
            setPhoneNumber(phoneNumber);
        } else {
            throw new IllegalArgumentException("Invalid phone number format");
        }
    }

    private String getPasswordHash() {
        return passwordHash;
    }

    private String generateHash(String password) {
        return Integer.toString(password.hashCode());
    }

    private void setPasswordHash(String newPassword) {
        this.passwordHash = generateHash(newPassword);
    }

    private boolean matchesPasswordHash(String password) {
        return getPasswordHash().equals(generateHash(password));
    }

    private  boolean validatePassword(String password) {
        return password.length() >= 8;
    }

    public void updatePasswordHash(String newPassword) {
        if(validatePassword(newPassword)) {
            setPasswordHash(generateHash(newPassword));
        } else {
            throw new IllegalArgumentException("Password must be at least 8 characters long");
        }
    }

    public int getAge() {
        return age;
    }

    private void setAge(int age) {
        this.age = age;
    }

    private  boolean validateAge(int age) {
        return age >= 18 && age <= 65;
    }

    public void updateAge(int newAge) {
        if(validateAge(newAge)) {
            setAge(newAge);
        } else {
            throw new IllegalArgumentException("Invalid age");
        }
    }

    public void signUp(String testedEmail, String testedPassword) {
        if(validateEmail(testedEmail) && validatePassword(testedPassword)) {
            System.out.println("User has been signed up");
        } else {
            throw new IllegalArgumentException("Email or password does not meet the requirements");
        }
    }

    public void logIn(String testedEmail, String testedPassword) {
        if(matchsEmails(testedEmail) && matchesPasswordHash(testedPassword)) {
            System.out.println("User has logged in");
        } else {
            throw new IllegalArgumentException("Invalid email or password");
        }
    }
}
