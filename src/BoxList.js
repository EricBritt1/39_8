import React from 'react';
import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const INITIAL_STATE = [
        {width: "200", height: "200", backgroundColor: "purple"},
        {width: "300", height: "300", backgroundColor: "blue"}
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE)


    const addBox = (boxData) => {
        setBoxes((prevBoxes) => [...prevBoxes, boxData]);
      };

    const removeBox = (index) => {
        const updatedBoxes = [...boxes];
        updatedBoxes.splice(index, 1);
        setBoxes(updatedBoxes);
      };
    
      return (
        <div>
          <h1>Generated Boxes</h1>
          <NewBoxForm addBox={addBox} />
          <div>
            {boxes.map((box, index) => (
              <Box
                key={index}
                width={box.width}
                height={box.height}
                backgroundColor={box.backgroundColor}
                remove={() => removeBox(index)}
              />
            ))}
          </div>
        </div>
      );
};


export default BoxList;