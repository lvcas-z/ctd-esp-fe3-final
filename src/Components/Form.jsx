import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState()
  const [message,setMessage]=useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
      if(name.length <5){
        setMessage("Please verify your information")
      }else{
        setMessage(`Gracias ${name},te contactaremos cuanto antes via mail`)
      }
      return message
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input required type="text" name='name' placeholder="Nombre" onChange={(e)=>setName(e.target.value)}/>
        <input required type="email" name='email' placeholder="Email"/>
        <button type="submit">Enviar</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};

export default Form;
