import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TodoInnerItem from './TodoInnerItem';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ id, title, items }) => {

    const onTodoDelete = () => {
        ///TODO: Api call
        console.log('need to delete')
    }

    return (
        <Box
            sx={{ boxShadow: 3 }}
            style={{
                border: '1px solid silver',
                borderRadius: '10px',
                width: '220px',
                height: '300px',
                padding: 20,
                margin: 20,
                position: 'relative'
            }}>
            <>
                <DeleteIcon color="warning" 
                onClick={onTodoDelete}
                style={{
                    position: 'absolute',
                    right: '-10px',
                    top: '-10px',
                    border: '1px solid',
                    borderRadius: '25px',
                    background: 'white',
                    fontSize: '25px'

                }} />
                <TextField
                    id="standard-textarea"
                    label="Title"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={title}
                />
                {items.map((item, index) =>
                    <TodoInnerItem parentId={id}
                        index={index}
                        {...item} />)}


            </>
        </Box>
    )
}

export default TodoItem;