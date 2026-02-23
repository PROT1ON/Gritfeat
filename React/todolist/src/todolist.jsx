import React,{ useState}from 'react'


function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleinputChange(e) {
        setNewTask(e.target.value);
    }
    function handleAddTask() {
        setTasks([...tasks, newTask]);
        setNewTask('');
        
    }
    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

     function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
    }

  return (   <div className='todoList'>
         <h1>Todo List</h1>
            <input type="text" 
            placeholder='Enter a task .....'
             onChange={handleinputChange}
              value={newTask}/>
            <button 
            className='buttonAdd'
            onClick={handleAddTask}>Add Task</button>
             <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button
                        className='buttonDelete'
                         onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button
                        className='buttonUp'
                         onClick={() => moveTaskUp(index)}>Up</button>
                        <button 
                        className='buttonDown'
                         onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
    </div>)
}
export default Todolist