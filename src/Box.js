import React from "react";

const Box = (props) => {
    const {width, height, backgroundColor, remove} = props
    return (
        <div>
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: backgroundColor
        }}></div> <button onClick={remove}>X</button>
        </div>
    )
};


export default Box;