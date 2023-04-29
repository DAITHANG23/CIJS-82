
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddNewTodo = (todoTitle) => {
    const NewTodoList = {
      title: todoTitle,
      id: uuidv4(),
      isChecked: false
    }

    const nextTodoList = [...todoList, NewTodoList];
    setTodoList(nextTodoList);
  }

  const onRemoveTodoList = (id) => {
    const removeTodoItem = todoList.filter((todoItem) => {
      return todoItem.id !== id;
    })
    setTodoList(removeTodoItem);
  }

  const isCheckTodoList = (todoId) => {
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === todoId;
    })
    const newTodoItem = [...todoList]
    // Cách 2:
    // const checkedTodoList = {
    //   ...newTodoItem[todoIndex],
    //   isChecked: !newTodoItem[todoIndex].isChecked
    // }
    // newTodoItem[todoIndex] = checkedTodoList

    if(newTodoItem[todoIndex].isChecked === false){
      newTodoItem[todoIndex].isChecked = true ;
    } else {
      newTodoItem[todoIndex].isChecked = false;
    }
    setTodoList(newTodoItem)
  }

  const onUpdateTitle = (updateTitle,id)  =>{
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === id;
    })
    const updateTodoList = [...todoList];
    updateTodoList[todoIndex]={
      ...updateTodoList[todoIndex],
      title:updateTitle
    }
    // updateTodoList[todoIndex].title = updateTitle;

    setTodoList(updateTodoList)
    
  }

  return (
    <div className="App">
      <TodoForm onAddNewTodo={onAddNewTodo} />
      <TodoList todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} />
    </div>
  );
}

export default App;
