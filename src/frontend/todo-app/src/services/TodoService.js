import axios from 'axios';

const BASE_URL = 'http://localhost:8000/todo'

const getTodosRequest = () => (axios.get(BASE_URL))

const createTodoRequest = (todo) => (axios.post(`${BASE_URL}/create`, todo))

const deleteTodoRequest = (id) => (axios.delete(`${BASE_URL}/${id}`))

const completeTodoRequest = (id, completed) => (axios.put(`${BASE_URL}/setCompleted?id=${id}&completed=${completed}`))

export { getTodosRequest, createTodoRequest, deleteTodoRequest, completeTodoRequest }