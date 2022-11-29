import React, { useState } from "react";
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TodoForm from "../components/TodoForm";
import TodoItem from './TodoItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Todo = () => {
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({ title: '', items: [{ text: '', completed: false, id: 1 }] })
    const [todos, setTodos] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setTodo({ title: '', items: [{ text: '', completed: false, id: 1 }] })
        setOpen(false)
    };

    const addTodoItemInput = () => {
        setTodo({ ...todo, items: [...todo.items, { text: '', completed: false, id: todo.items[todo.items.length - 1].id + 1 }] })
    }

    const deleteTodoItemInput = (id) => {
        const newItems = todo.items.filter(item => item.id != id);
        setTodo({ ...todo, items: newItems });
    }

    const onChangeTodoItemInput = (value, id) => {
        const index = todo.items.findIndex(item => item.id == id);
        todo.items[index].text = value;
        setTodo({ ...todo, items: [...todo.items] });
    }


    const onChangeTodoTitle = (text) => {
        setTodo({ ...todo, title: text })
    }

    const createTodo = () => {
        ///TODO: Call to server api 
        handleClose();
        setTodos([...todos, todo]);
        setTodo({ title: '', items: [{ text: '', completed: false, id: 1 }] });

    }


    return (
        <Box style={{ margin: 50 }}>
            <Button onClick={handleOpen}>

                <AddCircleOutlineIcon fontSize="large" color="primary" />
                <Box>Add Todo</Box>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TodoForm
                        closeModal={handleClose}
                        addTodoItemInput={addTodoItemInput}
                        deleteTodoItemInput={deleteTodoItemInput}
                        onChangeTodoItemInput={onChangeTodoItemInput}
                        onChangeTodoTitle={onChangeTodoTitle}
                        createTodo={createTodo}
                        todo={todo}
                    />
                </Box>
            </Modal>
            <Box style={{display:'flex'}}>
                {todos.map(item => <TodoItem {...item}/>)}
            </Box>
        </Box>
    )
}


export default Todo;