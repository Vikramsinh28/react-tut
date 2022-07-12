import React from 'react'

const ObjectDestruction = () => {
  

    // Array Destruction 
    const arr = ["Meow" , "This" , "red" , "green"];
    const [a ,b, ,c,d] = arr;
    // console.log(a);
    // console.log(b);


    // obj Destrucion
    const myobj = {
        car : "Swift",
        type : "Nice",
        year : "2002"
     }
    const NewObj = {
        car : "Swift",
        type : "Nice",
        year : "2002"
     }
     
     myVehicle(myobj);
   
     function myVehicle({car , type , year}){
        const name =  "This is"  + car + "type is" + type + "year is" + year;
        // console.log(name);
     }
   

    //  Spread Operator 

    const arr1 = [1,2,3,4,5,5,6,7];
    const arr2 = [5,2,2,4,2,4,2,7];

    const [one, two, ...rest] = arr1;

    // SPread in obj 

    const myNewSpread = { ...myobj ,...NewObj};
    console.log(myNewSpread);
  return (
    <div>ObjectDestruction</div>
  )
}

export default ObjectDestruction