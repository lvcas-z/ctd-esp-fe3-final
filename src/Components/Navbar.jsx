import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './utils/ThemeProvider'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, toggleTheme, themeName} = useTheme()

  return (
    <nav style={{backgroundColor:theme.backgroundNav, color:theme.textColor}}>
      <p><span>D</span>H Odonto</p>
      <div class= 'items-nav'>
      <Link to={'/'}><h4 style={{color:theme.textColor}}>Home</h4></Link>
      <Link to={'/contacto'}><h4 style={{color:theme.textColor}}>Contact</h4></Link>
      <Link to={'/favs'}><h4 style={{color:theme.textColor}}>Favs</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>{themeName === 'light' ? <img src= '../../images/moon.svg' alt='dark'/> : <img src= '../../images/sun.png' alt='ligth'/>}</button>
      </div>
    </nav>
  )
}

export default Navbar