import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const [fav,setFav]=useState([])
  
  const addFav = ()=>{
    const newFav ={
      name:name,
      username:username,
      id:id
    }
    setFav([...fav,newFav])
    console.log(fav)
  }

  return (
    <div key={id} className="card">
        <Link to={'/dentista/'+id}>
          <img src="./images/doctor.jpg" alt="foto odontologo"/>
          <h3>{name}</h3>
          <p>{username}</p>
        </Link>
        <button onClick={addFav} className="favButton"><img src='../../images/favorite.svg' alt='FavButton' /></button>
      </div>
  );
};

export default Card;
