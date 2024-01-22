import React from 'react';
import { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
    const initialState = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(initialState)
    

    const handleChange = (e) => {
        setFormData( data => ({
            ...data, 
            [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor='box-width'>Width</label>
            <input 
                id = "box-width" type="text"
                name = "width"
                placeholder="Enter Width in px" value={formData.width}
                onChange={handleChange}/>

            <label htmlFor='box-height'>Height</label>
            <input 
                id = "box-height" type="text" 
                name="height"
                placeholder="Enter Height in px" value={formData.height}
                onChange={handleChange}/>

            <label htmlFor='background-color'>Background Color</label>
            <input 
                id = "background-color" type="text"
                name="backgroundColor"
                placeholder="Enter Color" value={formData.backgroundColor}
                onChange={handleChange}/>

            <button>Create Box!</button>
        </form>
    )
};

export default NewBoxForm;