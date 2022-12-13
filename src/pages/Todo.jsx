import React, { useState } from 'react';
import Form from '../components/Toto/Form';
import { AiOutlineCheckSquare, AiOutlineDelete } from 'react-icons/ai'
import { TbWriting } from 'react-icons/tb'

const Todo = () => {

    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([])

    const deleteTask = (id) =>{
        const newTask = todo.filter((el) => el.id !== id)
        setTodo(newTask)
    }

    const checkTask = (id) =>{

        setTodo(
            todo.map((item) =>{
                if(item.id === id){
                    return {...item, ok: !item.ok} 
                }
            })
        )
        
    }



    return (
        <div 
        className='todo_container'>
            <header className='todo__head'>My Todo App</header>
            <div className="todo_card">
                <Form 
                task={task} 
                setTask={setTask}
                todo={todo}
                setTodo={setTodo}
                 />
                 <div className="todo__list">
                    <ul className="todo_menu">
                       {todo.map((el) =>(
                         <li 
                         key={el.id}
                         className="todo_item">
                            <p>{el.task}</p>
                            <div className="todo_icon">
                                <AiOutlineCheckSquare onClick={() => {checkTask(el.id)}} />      
                                <TbWriting />
                                <AiOutlineDelete onClick={() => {deleteTask(el.id)}} />
                            </div>
                         </li>
                       ))}
                    </ul>
                 </div>
            </div>
        </div>
    );
};

export default Todo;