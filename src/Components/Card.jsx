import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useTheme } from './utils/global.context'
import { useState } from "react";


const Card = ({name, username, id }) => {
  const {theme} = useTheme()
  const {fav, setFav} = useTheme()
  const [img,setimg] =  useState('../../images/favorite.svg')
  const pathname = window.location.pathname
  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(fav))
}, [fav])

  const addFav = (e)=>{
    const newFav ={
      name:name,
      username:username,
      id:id
    }
    if(fav.some(favId => favId.id === newFav.id)){
      alert("El dentista ya fue agregado a favoritos");
    }
    else{
      setFav([...fav,newFav])
      setimg(['../../images/fav2.png'])
    }
  }
  
  return (
    <div key={id} className={theme.card} >
        <Link to={'/dentista/'+id}>
          <img src="./images/doctor.jpg" alt="foto odontologo"/>
          <h3 className={theme.text}>{name}</h3>
          <p className={theme.text}>{username}</p>
        </Link>
        {pathname === '/'?
        <button onClick={addFav} className={"favButton"}><img src={img} alt='FavButton' /></button>
        :
        <button className={"favButton"}><img src='../../images/fav2.png' alt='FavButton' /></button>
        }
      </div>
  );
};

export default Card;
