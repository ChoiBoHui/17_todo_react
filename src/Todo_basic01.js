import React, { useState } from 'react'

const Todo_basic01 = () => {
    const [input, setInput] = useState();
    const [list, setList] = useState([]);
    return (
        <div style={{ padding: "100px 0" }}>
            {/* {input} */}
            {/* !!!? 중괄호 하고 불러오면 useState의 값이 나온다! 나진짜 리액트 모르는구만!!!?*/}
            <ul>
                {
                    list.map(it => <li>{it}</li>)
                }
            </ul>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={() => setList([...list, input])}>입력</button>
            {console.log(list)}
        </div>
    )
}

export default Todo_basic01;