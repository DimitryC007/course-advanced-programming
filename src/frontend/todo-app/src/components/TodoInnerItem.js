import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { completeTodoRequest } from "../services/TodoService";

const TodoInnerItem = ({ completed: propsCompleted, id, text }) => {
    const [completed, setCompleted] = useState(propsCompleted);

    const setCompletedValue = async () => {
        const requestedCompleted = !completed;
        const completedTodoResponse = await completeTodoRequest(id,requestedCompleted);
        const { data: isRowsEffected } = completedTodoResponse;
        if(isRowsEffected)
            setCompleted(requestedCompleted);
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
                    placeholder=""
                    multiline
                    fullWidth
                    margin="normal"
                    value={text}
                    style={{ textDecoration: completed ? 'line-through' : '' }}
                    disabled={completed}
                    variant="standard"
                />
            </Box>
        </Box>)
}


export default TodoInnerItem;