import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from './utils/ThemeProvider'


const Card = ({fav,setFav, name, username, id }) => {
  const {theme} = useTheme()
  

  const addFav = (e)=>{
    
    const newFav ={
      name:name,
      username:username,
      id:id
    }
    setFav([...fav,newFav])
    e.currentTarget.disabled = true
    localStorage.setItem("favs",JSON.stringify(fav))
  }
  
  return (
    <div key={id} className={theme.card} >
        <Link to={'/dentista/'+id}>
          <img src="./images/doctor.jpg" alt="foto odontologo"/>
          <h3 className={theme.text}>{name}</h3>
          <p className={theme.text}>{username}</p>
        </Link>
        <button onClick={addFav} className={"favButton"}>{ null ? <img src='../../images/favorite.svg' alt='FavButton' /> : <img src='../../images/fav2.png' alt='FavButton' />}</button>
      </div>
  );
};

export default Card;
