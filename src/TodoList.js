import React from 'react';
import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid} from "uuid";

const TodoList = () => {
    const [todo, setTodo] = useState([])

    const addTodo = (todoData) => {
        setTodo((previousTodos) => [
            ...previousTodos,
            todoData
        ])
    };

    const remove = (index) => {
        const updatedTodos = [...todo];
        updatedTodos.splice(index, 1);
        setTodo(updatedTodos)
    };

 return (
    <div>
        <NewTodoForm addTodo={addTodo}/>
        {todo.map((t, index) => (
                <Todo
                    key={uuid()} 
                    todo={t.todo} 
                    remove={() => remove(index)}
                    />
            ))
        }
    </div>
 )
};

export default TodoList;