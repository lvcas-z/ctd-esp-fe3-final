import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Components/Card'
import { useTheme } from '../Components/utils/ThemeProvider'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {theme} = useTheme()
  const [dentists,setDentists]= useState([])
  const [fav,setFav]=useState([])

  const getDentists = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    setDentists(data)
}

useEffect(()=>{
  getDentists()
},[])

  return (
    <main className=""  style={{backgroundColor:theme.backgroundBody}} >
      <h1 class= 'title'>Home</h1>
      <div className='card-grid'>
        {dentists.map(item=>(
          <Card key={item.id} name={item.name} username={item.username} id={item.id} fav={fav} setFav={setFav}/>
        ))}
      </div>
    </main>
  )
}

export default Home