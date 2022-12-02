import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
    Nombre: ${user.name} 
    Email: ${user.email}
    `)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input type="text" name='name' placeholder="Nombre" onChange={(event) => setUser({...user, name: event.target.value})} />
        <label></label>
        <input type="email" name='email' placeholder="Email" onChange={(event) => setUser({...user, email: event.target.value})}/>
      </form>

      <h4>Gracias {user.name}, te contactaremos cuanto antes via email</h4>
    </div>
  );
};

export default Form;
