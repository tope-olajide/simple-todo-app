import avatar from './../../assets/avatar.png';
const Header = () => {
    return (
        <>
            <header className="todo-header">
                <div className="todo-header-info">
                    <div className="avatar"> <img className='avatar-image' src={avatar} alt="avatar-image" /></div>
                    <div className="greeting-container">
                        <h1> Hello, Jhon</h1>
                        <span>What are  your plans
                            for today?</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header