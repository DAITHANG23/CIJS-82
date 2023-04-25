import { useState } from 'react'
import './TodoForm.css'

const TodoForm = (props) =>{
    const {onAddNewTodo} = props;

    const [valueInput, setValueInput] = useState("");
    const onChangeTodoForm = (e) =>{
        setValueInput(e.target.value)
    }

    const onAddNewTodoList = (e) =>{
        e.preventDefault();
        onAddNewTodo(valueInput);
        setValueInput("");
    }
    return <div className='form'>
        <input 
        type="text" 
        className="input-form"
        onChange={onChangeTodoForm}
        />
        <button onClick={onAddNewTodoList} className="button-form">+ ADD</button>
    </div>
}

export default TodoForm;