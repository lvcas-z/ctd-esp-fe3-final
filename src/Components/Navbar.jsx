import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, toggleTheme, themeName} = useTheme()

  return (
    <nav className={theme.nav}>
      <p><span>D</span>H Odonto</p>
      <div class= 'items-nav'>
      <Link to={'/'}><h4 className={theme.nav}>Home</h4></Link>
      <Link to={'/contacto'}><h4 className={theme.nav}>Contact</h4></Link>
      <Link to={'/favs'}><h4 className={theme.nav}>Favs</h4></Link>
      <button onClick={toggleTheme}>{themeName === 'light' ? <img src= '../../images/moon.svg' alt='dark'/> : <img src= '../../images/sun.png' alt='ligth'/>}</button>
      </div>
    </nav>
  )
}

export default Navbar