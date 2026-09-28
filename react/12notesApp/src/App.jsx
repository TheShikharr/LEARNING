
function App() {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex flex-col items-start gap-5 p-10" >
        <div className="flex flex-col items-start gap-4 w-1/2">
          <input
            type="text"
            placeholder="Heading"
            className="px-5 py-3 w-full border-2 rounded font-medium outline-none"
          />
          <textarea 
            type="text"
            placeholder="Enter Details"
            className="px-5 py-3 w-full h-32 border-2 rounded font-medium outline-none"
          />
          <button className="bg-amber-400  py-2 w-full rounded-2xl border-be-fuchsia-600 font-bold text-black">Add Notes</button>
        </div>
      </form>
    </div>
  )
}

export default App
