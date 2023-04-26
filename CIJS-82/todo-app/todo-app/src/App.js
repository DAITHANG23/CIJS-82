
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddNewTodo = (todoTitle) =>{
    const NewTodoList = {
      title: todoTitle,
      id: uuidv4(),
      isChecked : false
    }

    const nextTodoList = [...todoList, NewTodoList];
    setTodoList(nextTodoList);
  }

  const onRemoveTodoList = (id) =>{
    const removeTodoItem = todoList.filter((todoItem) =>{
      return todoItem.id !== id;
    })
    setTodoList(removeTodoItem);
  }

  const isCheckTodoList = () =>{

  }


  return (
    <div className="App">
     <TodoForm onAddNewTodo={onAddNewTodo}/>
     <TodoList todoList={todoList} onRemoveTodoList={onRemoveTodoList} />
    </div>
  );
}

export default App;
