import { useState } from "react";
import EditTaskHeader from "./EditTaskHeader";
import { Task } from "./Todo";

interface EditTaskProps {
    task: Task;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    setSelectedTask: (task: Task | null) => void; // Update the type here
}

const EditTask = ({ task, tasks, setTasks, setSelectedTask }: EditTaskProps) => {
    const [taskName, setTaskName] = useState(task.text); // Prefill with task name

    const handleSave = () => {
        const updatedTasks = tasks.map(t => 
            t.id === task.id ? { ...t, text: taskName } : t // Update the task with the new name
        );
        setTasks(updatedTasks); // Update the tasks in state
        setSelectedTask(null); // Reset selectedTask to null after saving
    };

    const handleDelete = () => {
        const updatedTasks = tasks.filter(t => t.id !== task.id); // Remove the task
        setTasks(updatedTasks); // Update tasks after deletion
        setSelectedTask(null); // Reset selectedTask after deletion
    };

    return (
        <section className="edit-task-container">
            <EditTaskHeader />

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
                                <p className="delete-button-text">Delete</p>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default EditTask;
