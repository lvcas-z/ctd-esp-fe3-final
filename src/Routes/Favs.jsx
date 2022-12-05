import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favs =JSON.parse(localStorage.getItem("favs"))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map(item=>(
          <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
