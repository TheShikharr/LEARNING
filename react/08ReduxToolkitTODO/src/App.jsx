import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className="app-container">
        <h1 className="text-4xl font-bold text-white mb-8">Redux Toolkit TODO</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
