import React, { useState, useRef, useEffect } from "react";
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TodoForm from "../components/TodoForm";
import TodoItem from '../components/TodoItem';
import Snackbar from '../common/Snackbar'
import { getTodosRequest, createTodoRequest, deleteTodoRequest } from "../services/TodoService";

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
    const [todo, setTodo] = useState({ id: null, title: '', items: [{ text: '', completed: false, id: 1 }] })
    const [todos, setTodos] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const severity = useRef();
    const text = useRef();


    useEffect(() => {
        getInitialTodos();
    }, [])

    const getInitialTodos = async () => {
        const todosResponse = await getTodosRequest();
        setTodos(todosResponse.data);
    }

    const handleDeleteTodo = async (id) => {
        const deleteTodoResponse = await deleteTodoRequest(id);
        const { data: isDeleted } = deleteTodoResponse;
        if (!isDeleted) {
            severity.current = 'error';
            text.current = 'Something went wrong';
            setOpenSnackbar(true);
        }
        const filteredTodos = todos.filter(item => item.id != id);
        setTodos([...filteredTodos]);
        severity.current = 'success';
        text.current = 'Todo is deleted successfully';
        setOpenSnackbar(true);
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setTodo({ id: null, title: '', items: [{ text: '', completed: false, id: 1 }] })
        setOpen(false)
    };

    const addTodoItemInput = () => {
        if (todo.items.length == 0)
            setTodo({ id: null, title: '', items: [{ text: '', completed: false, id: 1 }] });
        else
            setTodo({ ...todo, items: [...todo.items, { text: '', completed: false, id: todo.items[todo.items.length - 1].id + 1 }] });
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

    const createTodo = async () => {
        if (!todo.title) {
            severity.current = 'error';
            text.current = 'Todo title is required';
            setOpenSnackbar(true);
            handleClose();
            return;
        }
        todo.items = todo.items.filter(x => x.text)
        const createTodoResponse = await createTodoRequest(todo);
        const { data: createdTodo } = createTodoResponse;
        setTodos([...todos, createdTodo]);
        setTodo({ title: '', items: [{ text: '', completed: false, id: 1 }] });
        handleClose();
        severity.current = 'success';
        text.current = 'Todo created successfully';
        setOpenSnackbar(true);
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
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                {todos.map(item => <TodoItem handleDeleteTodo={handleDeleteTodo} {...item} />)}
            </Box>
            <Snackbar onClose={handleCloseSnackbar} open={openSnackbar} severity={severity.current} text={text.current} />
        </Box>
    )
}


export default Todo;