import './TodoItem.css'
import { FaEdit } from "react-icons/fa";
const TodoItem = (props) => {
    const { title, id, isChecked, onRemoveTodoList  } = props;
    return <div className='todo-item'>
        <div className='todo-item-title'>
            <input type='checkbox' checked={isChecked} id={id} />
            <p
                style={{
                    fontSize:"24px",
                    color:"rgba(0, 0, 0, 0.87)",
                    paddingTop:"10px"
                }}>{title}</p>
        </div>
        <div className='todo-func'>
            <FaEdit
                style={{
                    color: "rgb(54, 231, 54)",
                    fontSize:"35px",
                    cursor: "pointer",
                    marginRight:"20px"
                }} />

            <button onClick={()=> onRemoveTodoList (id)} type="button" className=" btn-danger btn rounded-circle" aria-label="Close">X</button>
        </div>

    </div>
}

export default TodoItem;