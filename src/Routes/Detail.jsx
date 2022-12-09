import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme} = useTheme()
  const [dentist,setDentist]= useState([])
  const params = useParams()

  const getDentist = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    setDentist(data)
}
  useEffect(()=>{
    getDentist()
  },[dentist])


  return (
    <div className={theme.body}>
      <h1 className={theme.title}>Detail Dentist id </h1>
      <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{dentist.name}</td>
                    <td>{dentist.email}</td>
                    <td>{dentist.phone}</td>
                    <td>{dentist.website}</td>
                </tr>
            </tbody>
            </table>
    </div>
  )
}

export default Detail