
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import {useState} from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoList, setTodoList] = useState("");

  const onAddNewTodo = (title) =>{
    const NewTodoList = {
      ...title,
      id: uuidv4(),
      isChecked : false
    }

    setTodoList(NewTodoList);
  }

  return (
    <div className="App">
     <TodoForm onAddNewTodo={onAddNewTodo}/>
     <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
