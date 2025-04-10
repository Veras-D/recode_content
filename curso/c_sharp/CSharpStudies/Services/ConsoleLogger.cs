using CSharpStudies.Interfaces;

namespace CSharpStudies.Services
{
    public class ConsoleLogger : ILogger
    {
        private static void WriteLog(string logType, string message, ConsoleColor color)
        {
            Console.ForegroundColor = color;
            Console.WriteLine($"[{logType}] {message}");
            Console.ResetColor();
        }
        public void LogInfo(string message)
        {
            WriteLog("INFO", message, ConsoleColor.Green);
        }

        public void LogError(string message)
        {
            WriteLog("ERROR", message, ConsoleColor.Red);
        }

        public void LogWarning(string message)
        {
            WriteLog("WARNING", message, ConsoleColor.Yellow);
        }
    }
}