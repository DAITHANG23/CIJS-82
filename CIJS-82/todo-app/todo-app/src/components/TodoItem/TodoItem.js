import './TodoItem.css'

const TodoItem = (props) =>{
    const {title, id, isChecked} = props;
    return <div>

        <input type='checkbox' checked={isChecked} id={id}/>
        <p>{title}</p>
        
    </div>
}

export default TodoItem;