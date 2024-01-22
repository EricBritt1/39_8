import React from 'react';
import {useState} from 'react';


const NewTodoForm = ( {addTodo} ) => {
    
    const INITIAL_VALUES = {
        todo : ""
    }

    const [formData, setFormData] = useState(INITIAL_VALUES)

    //What is data here I don't understand
    const handleChange = e => {
        setFormData( data => ({
            ...data,
            [e.target.name] : e.target.value
            })
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_VALUES)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Enter Todo: </label>
            <input id="todo" name="todo" type="text" placeholder='Enter task' value={formData.todo} onChange={handleChange}/>
            <button>Add Todo</button>
        </form>
    )
};


export default NewTodoForm;