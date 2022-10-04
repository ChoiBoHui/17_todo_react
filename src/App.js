import React, { useState } from 'react'

const App = () => {
    const [input, setInput] = useState(1);
    return (
        <div style={{ textAlign: "cneter", padding: "100px 0" }}>
            {input}
            {/* !!!? 중괄호 하고 불러오면 useState의 값이 나온다! 나진짜 리액트 모르는구만!!!?*/}
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setInput(input + 1)}>입력</button>

            {console.log(input)}
        </div>
    )
}

export default App;