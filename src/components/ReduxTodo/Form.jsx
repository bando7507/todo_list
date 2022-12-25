import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaks } from '../../store/redux';


const Form = () => {
    const [text, setText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTaks(text))
    }

    const dispatch = useDispatch()
    return (
        <form className='todo_form'>
        <input 
        className='todo_input' type="text" 
        placeholder='Add...'
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
        <button className='todo__btn' onClick={handleSubmit}>Add</button>
    </form>
    );
};

export default Form;