import EditTaskHeader from "./EditTaskHeader"

const EditTask = () => {
    return (
        <>
            <section className="edit-task-container">
                <EditTaskHeader />

                <div className="edit-task-body">

                    <div className="input-group">
                        <label htmlFor="taskName">Task Name</label>
                        <input
                            type="text"
                            id="taskName"

                        />
                    </div>
                    <div className="edit-task-button-container">
                        <section>
                           <div className='delete-button'>
                            <span className='delete-button__inner'>

                            </span>

                            <span className='button-text-container'><p className='delete-button-text'>Save</p></span>
                        </div>
                        <div className='save-button'>
                            <span className='save-button__inner'>

                            </span>

                            <span className='button-text-container'><p className='delete-button-text'>Delete</p></span>
                        </div> 
                        </section>
                        
                    </div>
                </div>

            </section>
        </>
    )
}

export default EditTask