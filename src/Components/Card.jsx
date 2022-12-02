import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <Link to={'/dentista/'+id}>
      <div key={id} className="card">
        <img src="./images/doctor.jpg" alt="foto odontologo"/>
        <h3>{name}</h3>
        <p>{username}</p>
        <button onClick={addFav} className="favButton"><img src='../../images/favorite.svg' alt='FavButton' /></button>
      </div>
    </Link>
  );
};

export default Card;
