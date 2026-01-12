import React, {useState} from "react";

const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);

const addTodo = ()=> {
    setTodos([...todos, {id : Date.now, text: todo, completed: false}]);
    setTodo("")
}

const deleteTodo = (id)=> {
    setTodos(todos.filter((t) => t.id !== id))
}

const toggletodo = (id) => {
    setTodos(todos.map( (t) => t.id === id ? {...t, !t.completed} : t))
}

return (
    <>
    <input type="text" value={todo}
    </>
)
