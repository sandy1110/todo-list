import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiPencil, TiDelete } from 'react-icons/ti';

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const update = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={update} />;
  }

  if(!todos.map){
    return <h3>No pending tasks</h3>
  }else {
    return todos.map((todo, index) => (
      <div className='todo-item' key={index}>
        <div key={todo.id}>
          {todo.text}
        </div>
        <div className='icons'>
          <TiPencil onClick={() => setEdit({ id: todo.id, value: todo.text })}/>
          <TiDelete onClick={() => removeTodo(todo.id)}/>
        </div>
      </div>
    ));
  }
};

export default Todo;