import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Components/Card'
import { useTheme } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {theme} = useTheme()
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
    <main className={theme.body} >
      <h1 className={theme.title}>Home</h1>
      <div className='card-grid'>
        {dentists.map(item=>(
          <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home