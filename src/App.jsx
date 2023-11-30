import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // On every render
  useEffect(() => { 
    window.addEventListener("resize", updateWindowWidth);
    console.log(windowWidth);
    console.log("i re-rendered")
  }); 

  // on first render/mount only 
  useEffect(() => { 
    console.log('MOUNTED')
  }, []) 

  // on first render + whenever dependancy changes
  useEffect(() => { 
    console.log(`The name changed: ${name}`)
  }, [name]); 

  useEffect(() => { 
    console.log('attach listener')
    window.addEventListener("resize", updateWindowWidth);
  }, []);

  const updateWindowWidth = () => { 
    setWindowWidth(window.innerWidth);
  }

  return (
    <>
    <h1>The useEffect Hook</h1>
    <h1>The window width is: {windowWidth}</h1>

   <input
   value={name}
   onChange={(e) => setName(e.target.value)}
   placeholder= "Enter a Name"
   />
    </>
  )
}

export default App
