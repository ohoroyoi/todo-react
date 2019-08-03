import React from 'react'

const TodoInput = (props) => {
    const { value, onChange, onClick } = props;

    console.log(value);
    

    return (
        <div>
            <input value={value} onChange={onChange}/>
            <button onClick={onClick}>추가하기</button>
        </div>
    )
}

export default TodoInput
