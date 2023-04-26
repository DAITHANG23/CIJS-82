import { useState } from 'react'
import './TodoForm.css'

const TodoForm = (props) => {


    const [title, setTitle] = useState("");
    const onChangeTodoForm = (e) => {
        setTitle(e.target.value)
    }

    const onAddNewTodoList = (e) => {
        e.preventDefault();
        props.onAddNewTodo(title);
        setTitle("");
    }
    return <div className='form'>
        <form onSubmit={onAddNewTodoList}>
            <input
                type="text"
                className="input-form"
                onChange={onChangeTodoForm}
                value={title}
                placeholder='I will do this *'
            />
            <button type='submit' className="button-form">+ ADD</button>
        </form>

    </div>
}

export default TodoForm;