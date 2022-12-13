import React from 'react';

const Form = ({ task, setTask, todo, setTodo}) => {

    const addTaks = (e) =>{
        e.preventDefault()
        setTodo( [...todo, {id: new Date(), task: task, ok: false}])
        setTask("")
    }
    return (
        <form className='todo_form'>
            <input 
            className='todo_input' type="text" 
            placeholder='Add...'
            value={task}
            onChange={(e) => {setTask(e.target.value)}}
            />
            <button className='todo__btn' onClick={addTaks}>Add</button>
        </form>
    );
};

export default Form;