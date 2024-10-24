
import avatar from './assets/avatar.png';
import trophy from './assets/trophy.png';
import checked from './assets/checked.png';
import unchecked from './assets/unchecked.png';
import upgradToPro from './assets/upgrade-to-pro.png';
import Header from './Header';
import GoPro from './GoPro';

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
                <Header />
                <GoPro />

                <main className="task-list">
                    {tasks.map(task => (
                        <div key={task.id} className={"task"}>
                            <img className='check-buttons' src={task.completed ? checked : unchecked} />
                            <span className="task-text">{task.text}</span>
                            <button className="edit-button">Edit</button>
                        </div>
                    ))}
                   
                </main>
                 <div className='add-task-button'>
                        <span className='add-task-button__inner'>

                        </span>
                       
<span className='button-text-container'><p className='button-text'>+</p></span>
                    </div>
            </div>
        </>
    )
}

export default Todo