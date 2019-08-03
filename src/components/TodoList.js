import React from 'react'

const TodoList = (props) => {
    const { todos, onRemove } = props;
    console.log(todos);
    return (
        <div>
            {todos.map((todo) => { return <div key={todo.id}><span>{todo.todo}</span><button onClick={() => onRemove(todo.id)}>삭제</button></div>} )}
        </div>
    )
}

export default TodoList
