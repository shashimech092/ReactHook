import React, { useEffect, useState } from "react";
import Display from "./Display";

const url='http://3.17.216.66:4000/restaurant?mealtype_id='
const Hooks=()=>{
    const [title, setTitle]=useState('React App')
    const [count, setCount]=useState(0)
    const [count1, setCount1]=useState(0)
    const [rest, setRest]=useState()

    const Update=()=>{
        setCount(count+1)
        setTitle('count starts')
    }
    useEffect(()=>{
        fetch(url, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setRest(data)
        })
    }, [count])

    return(
        <>
        <h1>{title}</h1>
        <h1>{count}</h1>
        <button onClick={Update}>Counter</button>
        <h1>{count1}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>Counter</button>
        <Display myData={rest}/> 
        </>
    )
}

export default Hooks