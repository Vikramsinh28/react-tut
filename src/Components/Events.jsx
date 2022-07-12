import React from 'react'

const Events = () => {

  const hello = (e) => {
    e.preventDefault();
    alert("Hello From Viku");
  }
  const hello2 = (e , a) => {
    e.preventDefault();
     console.log(a);
  }

  return (
    <div>
        <button onClick={(e)=>hello(e)}>Submit</button>
        <button onClick={(e , a)=>hello2(e , "Me") }>Submit</button>
    </div>
  )
}

export default Events