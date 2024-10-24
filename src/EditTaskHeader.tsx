const EditTaskHeader = ({isNewTask}:{isNewTask:boolean}) => {
    return (
        <>
            <header className="edit-task-header">
                <h1 className="edit-task-title">
                  {isNewTask?"New Task":"Edit Task"}
                </h1>
            </header>
        </>
    )
}

export default EditTaskHeader