import React , {useState} from 'react'

// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.


const UseStAte = () => {
    const [color,setColor] = useState("red")
    const [num,setNum] = useState(0)

    const change = () => {
        setColor("yelo");
    }
    const increment = () => {
        setNum(num+1);
    }
  return (
    <div>
        <h1>{color}</h1>
        <button onClick={change}>Click</button>
        <h2>{num}</h2>
        <button onClick={increment}>add</button>

    </div>
  )
}

export default UseStAte