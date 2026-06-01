import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.title)

    const {updateTodo, deleteTodo, toggleChecked} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, title: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleChecked(todo.id)
    }

    return (
        <div
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg border-2 transition-all duration-200`}
            style={{
                backgroundColor: todo.checked ? '#111827' : '#1f2937',
                borderColor: '#374151'
            }}
        >
            <input
                type="checkbox"
                className="w-4 h-4 rounded cursor-pointer"
                checked={todo.checked}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className="flex-1 text-white outline-none"
                style={{
                    backgroundColor: 'transparent',
                    textDecoration: todo.checked ? 'line-through' : 'none',
                    color: todo.checked ? '#9CA3AF' : '#FFFFFF',
                }}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                onFocus={() => {
                    if (!todo.checked) setIsTodoEditable(true)
                }}
            />
            {/* Edit, Save Button */}
            <button
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                onClick={() => {
                    if (todo.checked) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.checked}
            >
                {isTodoEditable ? '💾' : '✏️'}
            </button>
            {/* Delete Todo Button */}
            <button
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
                onClick={() => deleteTodo(todo.id)}
            >
                ✕
            </button>
        </div>
    );
}

export default TodoItem;
