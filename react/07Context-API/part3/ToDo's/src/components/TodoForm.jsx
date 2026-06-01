import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
    const [todo,setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({
            title: todo,
            checked: false,
        })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex gap-2">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 border-2 border-[#374151] focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400"
                style={{ backgroundColor: '#1f2937' }}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
