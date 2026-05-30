import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "todo mesg",
            completed: false,
        },
    ],
    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    deleteTodo: (id) => {},
    toggleChecked: (id) => {}
})


export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}