import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState()
  const [message,setMessage]=useState()

  const handleSubmit = (e)=>{
    e.preventDefault()

    let re = /\w+\s/g;

    if (re.test(name) && name.length>3 && name.length<150 && !/[0-9]/.test(name)){
      setMessage(`Gracias ${name},te contactaremos cuanto antes via mail`)
    } else {
        setMessage("Porfavor ingrese los datos correctamente")
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
