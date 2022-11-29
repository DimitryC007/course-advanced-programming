import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


const TodoInnerItem = ({ index,completed: propsCompleted, id, parentId, text }) => {
    console.log(propsCompleted)
    const [completed, setCompleted] = useState(propsCompleted);

    const setCompletedValue = (todoId, itemId) => {
        ///TODO: Call api
        setCompleted(!completed);
    }

    return (
        <Box style={{ display: 'flex' }}>
            {completed ?
                <CheckCircleOutlineIcon sx={{ mt: "30px", mr: "20px" }} color="primary" onClick={() => setCompletedValue(id)} /> :
                <RadioButtonUncheckedIcon sx={{ mt: "30px", mr: "20px" }} color="warning" onClick={() => setCompletedValue(id)} />}
            <Box>
                <TextField
                    key={id}
                    id="outlined-textarea"
                    label={`#${index + 1} item`}
                    placeholder="enter text"
                    multiline
                    fullWidth
                    margin="normal"
                    value={text}
                    style={{ textDecoration: completed ? 'line-through' : '' }}
                    disabled={completed}
                />
            </Box>
        </Box>)
}


export default TodoInnerItem;