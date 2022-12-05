import React from 'react'
import { useTheme } from './utils/ThemeProvider'


const Footer = () => {
  const {theme} = useTheme()
  
  return (
    <div className={theme.body}>
      <p class='second-footer' className={theme.secondFooter} >VOLTAR PARA O TOPO</p>
    
    <footer className={theme.body}>
        <img className={theme.logo} src='../../images/DH.png' alt='DH-logo' />
        <div>
        <img className={theme.icons} src='../../images/ico-facebook.png' alt='facebook-logo' />
        <img className={theme.icons} src='../../images/ico-instagram.png' alt='instagram-logo' />
        <img className={theme.icons} src='../../images/ico-whatsapp.png' alt='whatsapp-logo' />
        <img className={theme.icons} src='../../images/ico-tiktok.png' alt='tiktok-logo' />
        </div>
        
    </footer>
    </div>
  )
}

export default Footer
