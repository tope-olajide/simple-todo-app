import { useState } from "react";
import EditTaskHeader from "./EditTaskHeader";
import { Task } from "./Todo";

interface CreateOrEditTaskProps {
    task: Task;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    setSelectedTask: (task: Task | null) => void; // Update the type here
}

const CreateOrEditTask = ({ task, tasks, setTasks, setSelectedTask }: CreateOrEditTaskProps) => {
    const [taskName, setTaskName] = useState(task.text); // Prefill with task name

    const handleSave = () => {

        if (task.id) {
            // Editing an existing task
            const updatedTasks = tasks.map(eachTask =>
                eachTask.id === task.id ? { ...eachTask, text: taskName } : eachTask
            );
            setTasks(updatedTasks);
        } else {
            if (!taskName) {
                return setSelectedTask(null);
            }
            // Adding a new task
            const newTask: Task = {
                id: Date.now(), // Unique ID generation (simple version)
                text: taskName,
                completed: false,
            };
            setTasks([...tasks, newTask]);
        }

        setSelectedTask(null); // Reset selected task (or close the modal)
    };

    const handleDelete = () => {
        const updatedTasks = tasks.filter(eachTask => eachTask.id !== task.id); // Remove the task
        setTasks(updatedTasks); // Update tasks after deletion
        setSelectedTask(null); // Reset selectedTask after deletion
    };

    return (
        <section className="edit-task-container">
            <EditTaskHeader isNewTask={task.id ? false : true} />

            <div className="edit-task-body">
                <div className="input-group">
                    <label htmlFor="taskName">Task Name</label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>

                <div className="edit-task-button-container">
                    <section>
                        <div className="delete-button" onClick={handleSave}>
                            <span className="delete-button__inner" />
                            <span className="button-text-container">
                                <p className="delete-button-text">Save</p>
                            </span>
                        </div>
                        <div className="save-button" onClick={handleDelete}>
                            <span className="save-button__inner" />
                            <span className="button-text-container">
                                <p className="delete-button-text">{task.id ? "Delete" : "Back"}</p>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default CreateOrEditTask;
