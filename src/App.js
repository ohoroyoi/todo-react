import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default class App extends Component {
   
     // constructor(props){
    //     super(props);
    //     this.state = {
    //         todos: []
    //     };
    // }

    state = {
        todos: [
            {
                id: 0,
                todo: '장보기'
            },
        ],
        inputData: '안녕',
    } //최신 ㅇㅇ 문법

    // handleAddData(e) {
    //     // this.setState();
    //     console.log(e.target.value);
    //     this.setState({
    //         inputData: e.target.value
    //     });
    // }
    /** this.handleAddData.bind(this) 로 넘겨줘야 해서 불편한 방법 */

    handleChange = (e) => {
        this.setState({
            inputData: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            todos:  [
                ...this.state.todos,
                //this.state.inputData 
                {
                    id: this.state.todos.length === 0 ? 0 : this.state.todos.pop().id + 1,
                    todo: this.state.inputData
                }
            ]
        })
    }

    handleRemove = (id) => {
        console.log(id);

        const newTodos = this.state.todos.filter((todo) => {
            return todo.id !== id
        });
        console.log(newTodos);
        this.setState({
            todos: newTodos
        });
    }

    render() {
        return (
            <div>
                <TodoInput value={this.state.inputData} onChange={this.handleChange} onClick={this.handleClick} />
                <TodoList todos={this.state.todos} onRemove={this.handleRemove}/>
            </div>
        )
    }
}
