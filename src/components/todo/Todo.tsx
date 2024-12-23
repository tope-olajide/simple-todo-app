import checked from './../../assets/checked.png';
import unchecked from './../../assets/unchecked.png';
import Header from './Header';
import GoPro from './GoPro';
import { useState } from 'react';
import CreateOrEditTask from '../createAndEditTask/CreateOrEditTask';

export interface Task {
    id: number | null;
    text: string;
    completed: boolean;
}

const Todo = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: 'Training at the Gym', completed: true },
        { id: 2, text: 'Play Paddle with friends', completed: false },
        { id: 3, text: 'Burger BBQ with family', completed: false },
    ]);

    // Initialize selectedTask as null instead of an empty array
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleEditClick = (task: Task) => {
        setSelectedTask(task); // Set the clicked task as the selected task
    };
    const handleNewTaskClick = () => {
        setSelectedTask({ id: null, text: '', completed: false });
        console.log(selectedTask)
    };

    // Function to toggle the 'completed' status
    const toggleTaskCompleted = (taskId: number | null) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks); // Update the state with the modified task list
    };
    return (
        <>
            {/* Conditionally render CreateOrEditTask or task list based on selectedTask */}
            {selectedTask ? (
                <CreateOrEditTask
                    task={selectedTask}
                    tasks={tasks}
                    setTasks={setTasks}
                    setSelectedTask={setSelectedTask}
                />
            ) : (
                <div className="todo-container">
                    <Header />
                    <GoPro />

                    <main className="task-list">
                        {tasks.map(task => (
                            <div key={task.id} className="task">
                                <img
                                    className="check-buttons"
                                    src={task.completed ? checked : unchecked}
                                    alt={task.completed ? "Checked" : "Unchecked"}
                                    onClick={() => toggleTaskCompleted(task.id)}
                                />
                                <span onClick={() => toggleTaskCompleted(task.id)} className={task.completed ? "completed-task-text" : "task-text"}>{task.text}</span>
                                <button className="edit-button" onClick={() => handleEditClick(task)}>
                                    Edit
                                </button>
                            </div>
                        ))}
                    </main>

                    <div className="add-task-button" onClick={handleNewTaskClick}>
                        <span className="add-task-button__inner" />
                        <span className="button-text-container">
                            <p className="button-text">+</p>
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Todo;
