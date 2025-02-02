import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
    const [color, setColor]=useState("black")
    const [isOn, setIsOn]=useState(false)
    useEffect(()=>{
        let timer
        if(isOn)
         timer= setInterval(()=>{
            if(isOn)
            setCount((prev)=>prev+1)
            return
        },1000)
        else{
            clearInterval(timer)
        }
        return () => clearInterval(timer);
    },[isOn])

    useEffect(()=>{

        setTimeout(()=>{
            setColor("black")
        },1000)
    },[color])
  return (
    <div>
        <div style={{color:color}}>
        {count}
        </div>
        <br/>
      <button onClick={()=> setCount(count+1)}>Increase Count</button>
      <button onClick={()=>setIsOn((prev)=>!prev)}>{isOn?"Stop Counting":"Start Counting"}</button>
      <button onClick={()=>count>0?setCount(count-1):setColor("red")}>Reduce Count</button>
    </div>
  )
}

export default Counter
