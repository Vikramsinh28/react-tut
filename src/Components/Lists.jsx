import React from 'react'

const Lists = () => {

    const arr = ["My" , "Name" , "Is" , "Vikramsinh" ];

  return (
    <div>
         {
            arr.map((item , index)=> <h1>{index + item}</h1>)
         }
    </div>
  )
}

export default Lists