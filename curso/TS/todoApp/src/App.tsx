import { useState, useEffect } from "react";
import { Task } from "./taskClass";
import { addTask, toggleTask, removeTask } from "./tasksFunctions";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) setTasks(JSON.parse(savedTasks));
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">
                    Todo List
                </h1>

                <div className="flex mb-4">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-l"
                        placeholder="Add a new task..."
                    />
                    <button
                        onClick={() =>
                            addTask(newTask, tasks, setTasks, setNewTask)
                        }
                        className="bg-purple-600 text-white px-4 rounded-r"
                    >
                        Add
                    </button>
                </div>

                <ul className="task-list">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`flex justify-between items-center p-2 border-b ${
                                task.completed
                                    ? "line-through text-gray-400"
                                    : ""
                            }`}
                        >
                            <span>{task.text}</span>
                            <div>
                                <button
                                    onClick={() =>
                                        toggleTask(task.id, tasks, setTasks)
                                    }
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    ✔
                                </button>
                                <button
                                    onClick={() =>
                                        removeTask(task.id, tasks, setTasks)
                                    }
                                    className="bg-gray-500 text-white px-2 py-1 rounded"
                                >
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
