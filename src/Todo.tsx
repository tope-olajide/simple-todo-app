
import avatar from './assets/avatar.png';
import trophy from './assets/trophy.png';
import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png';
import upgradToPro from './assets/upgrade-to-pro.png';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const tasks: Task[] = [
    { id: 1, text: 'Training at the Gym', completed: true },
    { id: 2, text: 'Play Paddle with friends', completed: false },
    { id: 3, text: 'Burger BBQ with family', completed: false },
]

const Todo = () => {

    return (
        <>
            <div className="todo-container">
                <header className="todo-header">
                    <div className="todo-header-info">
                        <div className="avatar"></div>
                        <div className="greeting-container">
                            <h1> Hello, Jhon</h1>
                            <p>What are  your plans
                                for today?</p>
                        </div>
                    </div>
                </header>
                <div className="upgrade-container">
                    <img className='upgrade-image' src={upgradToPro} alt="" />
                    </div>
<main className="task-list">
                        {tasks.map(task => (
                            <div key={task.id} className={"task"}>
                                <img className='' src={task.completed?checked:unchecked} alt="" />
                                <span className="task-text">{task.text}</span>
                                <button className="edit-button">Edit</button>
                            </div>
                        ))}
                    </main>
            </div>
        </>
    )
}

export default Todo