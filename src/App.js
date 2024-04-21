import React, {useState} from 'react';
import {Paper} from '@mui/material';
import TodoInput from './component/todoInput';
import './App.css';
import TodolistComponent from './component/todolistComponent';

function App() {

  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if(inputText !== ''){
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo([...newListTodo]);
  }


  return (
    <>
      <div className='container'>
        <Paper className='todo-container'>
          <h1 style={{textAlign:'center'}}>Todo App</h1>

          {/* input component */}
          <TodoInput addList={addList} />

          {listTodo.map((listItem, index) => {
            return (
              <TodolistComponent key={index} item={listItem} deleteListItem={deleteListItem} />
            )
          })}

        </Paper>
      </div>
    </>
  );
}

export default App;
