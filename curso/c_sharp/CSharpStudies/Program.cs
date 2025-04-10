using CSharpStudies.Services;
using CSharpStudies.Models;

class Program
{
    static void Main()
    {
        // See https://aka.ms/new-console-template for more information

        // Console.WriteLine("Hello, World!");

        // bool studdingNow, isInLove;
        // byte ageUser = 25, currentMonth = 5;
        // ageUser--;  // decrementing by one
        // int bigNumber = 300;
        // double heightUser = 1.75;
        // decimal currentMoney = 3651.54m;
        // char genderUser = 'F';
        // string nameUser = "Vivi";
        // bool maiorDeIdade = ageUser > 18 ? true : false;  // Operador ternário

        // Age calculator
        // Console.WriteLine("What is your name? ");
        // string? input = Console.ReadLine();
        // if (!string.IsNullOrEmpty(input))
        // {
        //     string name = input;
        //     Console.WriteLine($"Welcome {name}!");
        // }
        // else
        // {
        //     Console.WriteLine("You didn't enter your name!");
        // }
        // Console.WriteLine("What year were you born? ");
        // int year = int.Parse(Console.ReadLine()!);
        // int age = 2025 - year;
        // Console.WriteLine($"You are {age} years old.");

        // if (age >= 18)
        // {
        //     Console.WriteLine("You are an adult.");
        // }
        // else if (age < 18)
        // {
        //     Console.WriteLine("You are a minor.");
        // }
        // else
        // {
        //     Console.WriteLine("Invalid age.");
        // }

        // string[] namesArray = ["Vivi", "Dotnet", "GPT"];
        // foreach (string nameArray in namesArray)
        // {
        //     Console.WriteLine(nameArray);
        //     Console.WriteLine(namesArray.Length);
        //     if (string.Equals(nameArray, "viVi", StringComparison.OrdinalIgnoreCase)) {
        //         Console.WriteLine("Found Vivi!");
        //     }
        // }

        // string[] nomes = ["Vivi", "Luna"];
        // nomes = nomes.Append("João").ToArray();

        // List<string> list1 = ["Vivi", "Luna"];
        // list1.Add("João");

        // string[] tudo = [..nomes, ..list1, "Final"];

        // foreach (var nome in tudo)
        // {
        //     Console.WriteLine(nome);
        // }

        // int.TryParse("42", out int x);
        // int.TryParse("hallo", out int y);
        // string w = x.ToString();
        // Console.WriteLine(x);
        // Console.WriteLine(y);
        // Console.WriteLine(w);

        // string? s = null;

        // try
        // {
        //     Console.WriteLine(s.Length);
        // }
        // catch (NullReferenceException e)
        // {
        //     Console.WriteLine($"s is null {e}");
        // }
        // catch (Exception e)
        // {
        //     Console.WriteLine($"Error {e}");
        // }

        // string? nomeNull = null;
        // string resultado = nomeNull ?? "Visitante";
        // Console.WriteLine($"Olá, {resultado}!");


        // string? cidade = null;
        // string pais = "Brasil";

        // Console.WriteLine(cidade ?? pais);  // imprime "Brasil"

        // int[] numbersArrays = [1, 2, 3, 4, 5, 7];
        // int[] query = [.. numbersArrays.Where(number => number > 3)];

        // string[] nomes = ["Vivi", "João", "Ana"];
        // string[] resultado = [.. nomes.Where(n => n.Length > 3)];
        // Console.WriteLine(string.Join(", ", resultado)); // Vivi, João


        ConsoleLogger logger = new();
        BankAccount account = new("vivi", 1000m, logger);

        account.Deposit(200m);
        account.Withdraw(500m);
        Console.WriteLine($"{account.Owner} has ${account.Balance}");

    }
}