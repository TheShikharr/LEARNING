import Chai from './Chai.jsx'

function App() {
  const series = "HELL'S PARADISE"

  return (
    // fragments <> </>
    <>                   
    <Chai/> 
    <h1>Watch {series}</h1> 
    {  /* {series} -> evaluated expression  */  }           
    <h3>It's midblowing</h3>
    </>                 
  )
}

export default App
 