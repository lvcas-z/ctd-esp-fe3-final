import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists,setDentists]= useState([])

  const getDentists = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    setDentists(data)
}

useEffect(()=>{
  getDentists()
},[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(item=>(
          <Card name={item.name} username={item.username} id={item.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home