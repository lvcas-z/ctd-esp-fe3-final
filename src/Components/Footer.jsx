import React from 'react'
import { useTheme } from './utils/ThemeProvider'

const Footer = () => {
  const {theme} = useTheme()
  return (
    <div>
      <p class='second-footer' style={{backgroundColor:theme.backgroundFooter, color:theme.colorFooter}}>VOLTAR PARA O TOPO</p>
    
    <footer>
        <img src='../../images/DH.png' alt='DH-logo' />
        <div>
        <img src='../../images/facebook.svg' alt='facebook-logo' />
        <img src='../../images/instagram.svg' alt='instagram-logo' />
        <img src='../../images/whatsapp.svg' alt='whatsapp-logo' />
        <img src='../../images/tik-tok.svg' alt='tiktok-logo' />
        </div>
        
    </footer>
    </div>
  )
}

export default Footer
