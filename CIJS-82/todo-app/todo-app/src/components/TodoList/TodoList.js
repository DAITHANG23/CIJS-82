import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList = (props) =>{
    const {todoList, onRemoveTodoList } = props

    const todoListValid = todoList && Array.isArray(todoList);

    const todoListElement = todoListValid && todoList.map((todoItem) =>{
        const {title, id, isChecked} = todoItem;
        return <div key={id}>
            <TodoItem title={title} id={id} isChecked={isChecked} onRemoveTodoList={onRemoveTodoList}/>
        </div>
    })

    return <div>
        {todoListElement}
    </div>   
    
}

export default TodoList;