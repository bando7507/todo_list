import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/ReduxTodo/Form';
import { AiOutlineCheckSquare, AiOutlineDelete } from 'react-icons/ai'
import { TbWriting } from 'react-icons/tb'

const ReduxTodo = () => {
    const taks = useSelector((state) => state.todo)
    return (
        <div 
        className='todo_container'>
            <header className='todo__head'>My Todo App</header>
            <div className="todo_card">
                <Form 
                taks={taks}
                 />
                 <div className="todo__list">
                    <ul className="todo_menu">
                        {taks.map((el) =>(
                            <li key={el.id}
                            className="todo_item">
                                <p>{el.task}</p>
                                    <div>
                                    <AiOutlineCheckSquare />      
                                    <TbWriting />
                                    <AiOutlineDelete />
                                </div>
                            </li>
                        ))}
                    </ul>
                 </div>
            </div>
        </div>
    );
};

export default ReduxTodo;