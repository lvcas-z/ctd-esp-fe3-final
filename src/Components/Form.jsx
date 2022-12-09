import React, {useState} from "react";
import { useTheme } from '../Components/utils/global.context'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {theme} = useTheme()
  const [name, setName] = useState()
  const [message,setMessage]=useState()

  const handleSubmit = (e)=>{
    e.preventDefault()

    let re = /\w+\s/g;

    if (re.test(name) && name.length>3 && name.length<150 && !/[0-9]/.test(name)){
      setMessage(`Thank you ${name}, we will contact you by email as soon as possible`)
    } else {
        setMessage("Please verify your information")
    }
    return message
  }


  return (
    <div className={theme.body}>
      <form onSubmit={handleSubmit}>
        <input required type="text" name='name' placeholder="Fullname" onChange={(e)=>setName(e.target.value)}/>
        <input required type="email" name='email' placeholder="Email"/>
        <button type="submit">Send</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};

export default Form;
