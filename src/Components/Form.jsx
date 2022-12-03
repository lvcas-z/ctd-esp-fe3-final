import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: '',
    email: '',
  })
  const message = null;

  const handleChange =(e)=>{
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Gracias ${user.name}, te contactaremos cuanto antes via email`
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input required type="text" name='name' placeholder="Nombre" onChange={handleChange} />
        <input required type="email" name='email' placeholder="Email" onChange={handleChange}/>
        <button type="submit">Enviar</button>
      </form>
      <h3>{message!=null?message:"No funca"}</h3>
    </div>
  );
};

export default Form;
