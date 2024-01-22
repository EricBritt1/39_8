import React from 'react';

const Todo = (props) => {
    const {todo, remove} = props
    return (
        <div>
            {todo}
            <button onClick={remove}>X</button>
        </div>
    )
};

export default Todo;