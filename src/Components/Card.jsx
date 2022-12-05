import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from './utils/ThemeProvider'
import { useState } from "react";


const Card = ({name, username, id }) => {
  const {theme} = useTheme()
  const {fav, setFav} = useTheme()
  const [img,setimg] =  useState('../../images/favorite.svg')

  const addFav = (e)=>{
    e.currentTarget.disabled = true
    
    const newFav ={
      name:name,
      username:username,
      id:id
    }
    setFav([...fav,newFav])
    setimg(['../../images/fav2.png'])
    localStorage.setItem("favs",JSON.stringify(fav))
  }
  
  return (
    <div key={id} className={theme.card} >
        <Link to={'/dentista/'+id}>
          <img src="./images/doctor.jpg" alt="foto odontologo"/>
          <h3 className={theme.text}>{name}</h3>
          <p className={theme.text}>{username}</p>
        </Link>
        <button onClick={addFav} className={"favButton"}><img src={img} alt='FavButton' /></button>
      </div>
  );
};

export default Card;
