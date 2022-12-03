import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // localStorage.setItem('dentistFav',JSON.stringify(name,username))
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
