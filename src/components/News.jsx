import React, { useState } from 'react'
import axios from "axios";


const News = () => {
    const [data, setData]= useState([])
    const [visible, setVisible] = useState(false)
    const getNews=()=>{
        setVisible((prev)=>!prev)
        axios
        .get(import.meta.env.VITE_NEWS_API)
        .then((response)=>{
            setData(response.data.articles)
        })
        .catch((error)=>{
            console.log("error:"+{error})
        })
        
    }
  return (
    <div>
        <button onClick={getNews}>Get News</button>
    {visible&&      
    <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}>
      {data.map((value, i)=>(
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            height: "200px",
            overflow: "hidden",
          }}>
        <h1 style={{fontSize:"0.8rem",}}>{value.title}</h1>
        <p>{value.content}</p>
        </div>
      ))}
      </div>}
    </div>
  )
}

export default News
