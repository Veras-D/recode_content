import { Task } from "./taskClass";

// Adiciona uma nova tarefa
export const addTask = (
    newTask: string,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task>>,
    setNewTask: React.Dispatch<React.SetStateAction<string>>
) => {
    if (!newTask.trim()) return;
    const task: Task = {
        id: Date.now(),
        text: newTask,
        completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
}

// Alterna o status de concluído da tarefa
export const toggleTask = (
    id: number,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed} : task
        )
    )
}

// Remove uma tarefa pelo ID
export const removeTask = (
    id: number,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
    setTasks(tasks.filter((task) => task.id !== id));
}