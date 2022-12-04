import React from 'react'
import { useTheme } from './utils/ThemeProvider'


const Footer = () => {
  const {theme} = useTheme()
  
  return (
    <div style={{backgroundColor:theme.backgroundBody}}>
      <p class='second-footer' style={{backgroundColor:theme.backgroundSecondFooter, color:theme.textColor}} >VOLTAR PARA O TOPO</p>
    
    <footer style={{backgroundColor:theme.backgroundBody}}>
        <img style={{filter:theme.logoColor}} src='../../images/DH.png' alt='DH-logo' />
        <div>
        <img className='icons' style={{filter:theme.iconsColor}} src='../../images/ico-facebook.png' alt='facebook-logo' />
        <img className='icons' style={{filter:theme.iconsColor}} src='../../images/ico-instagram.png' alt='instagram-logo' />
        <img className='icons' style={{filter:theme.iconsColor}} src='../../images/ico-whatsapp.png' alt='whatsapp-logo' />
        <img className='icons' style={{filter:theme.iconsColor}} src='../../images/ico-tiktok.png' alt='tiktok-logo' />
        </div>
        
    </footer>
    </div>
  )
}

export default Footer
