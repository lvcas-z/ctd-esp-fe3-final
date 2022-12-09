import React, {createContext, useState, useContext} from "react";

const themeStyles = {
    dark: {
        nav: 'nav-dark',
        navLinks: 'links-dark',
        body: 'body-dark',
        secondFooter: 'footer2-dark second-footer',
        logo: 'logo-dark',
        icons: 'icons',
        card: 'card card-dark',
        text: 'text',
        title: 'title title-dark',
        footerBody: 'footerBody-dark'

    },
    light:{
        nav: 'nav-light',
        navLinks: 'links-light',
        secondFooter: 'footer2-light second-footer',
        icons: 'icons-light icons',
        card: 'card card-light',
        title: 'title',
        footerBody: 'footerBody-light'
    }
}

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [fav,setFav]=useState([])
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {theme === 'light' ? setTheme('dark') : setTheme('light')}
    const value = {
        fav,
        setFav,
        theme: themeStyles[theme],
        toggleTheme,
        themeName: theme
    };
    return <ThemeContext.Provider value = {value} {...props}/>
}

const useTheme = () => useContext(ThemeContext)

export {ThemeProvider as default, useTheme};

