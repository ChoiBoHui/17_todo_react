import React, { useState } from 'react'

const Todo_basic02 = () => {
    const [todo, setTodo] = useState({});
    // 얘는 객체
    const [todolist, setTodolist] = useState([]);
    // 얘는 배열
    return (
        <div>
            <ul>
                {
                    todolist.map((it, idx) => <li key={idx}>{it.title} / {it.content}</li>)
                }
            </ul>
            <input onChange={e => setTodo({ ...todo, [e.target.name]: e.target.value })} name='title' />
            <input onChange={e => setTodo({ ...todo, [e.target.name]: e.target.value })} name='content' />
            <button onClick={() => setTodolist([...todolist, todo])}>Write</button>
            {console.log(todo)}
        </div>
    )
}

export default Todo_basic02;