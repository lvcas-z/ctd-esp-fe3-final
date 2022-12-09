import React from "react";
import Card from "../Components/Card";
import { useTheme } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {theme} = useTheme()
  const favs =JSON.parse(localStorage.getItem("favs"))
  // const disabled = true 
  return (
    <div className={theme.body}>
      <h1 className={theme.title}>Dentists Favs</h1>
      <div className="card-grid">
        {favs?.map(item=>(
          <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;
