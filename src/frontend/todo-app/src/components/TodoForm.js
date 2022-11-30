import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoForm = ({ todo, closeModal, addTodoItemInput, deleteTodoItemInput, onChangeTodoItemInput, createTodo, onChangeTodoTitle }) => {


    return (
        <Box style={{ margin: 10 }}>
            <TextField
                id="standard-textarea"
                label="Todo Title"
                multiline
                variant="standard"
                fullWidth
                margin="normal"
                onChange={(e) => onChangeTodoTitle(e.target.value)}
            />
            <Button style={{ margin: 10 }} onClick={addTodoItemInput}>
                Add todo item
                <AddCircleOutlineIcon color="primary" />
            </Button>
            <Box style={{ margin: "10px" }}>
                {todo.items.map((item, index) => {
                    return (
                        <Box style={{ display: 'flex' }}>
                            <TextField
                                key={item.id}
                                id="outlined-textarea"
                                label={`#${index + 1} item`}
                                placeholder="enter text"
                                multiline
                                fullWidth
                                margin="normal"
                                value={item.text}
                                onChange={(e) => onChangeTodoItemInput(e.target.value, item.id)}
                            />
                            <DeleteIcon color="warning" sx={{ mt: "30px", ml: "20px" }} onClick={() => deleteTodoItemInput(item.id)} />
                        </Box>)
                })}
            </Box>
            <Button onClick={createTodo} color="primary" variant="contained" style={{ margin: "10px" }}>Submit</Button>
            <Button onClick={closeModal} color="warning" variant="outlined" style={{ margin: "10px" }}>Cancel</Button>
        </Box>
    )
}


export default TodoForm;