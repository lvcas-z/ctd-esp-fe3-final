import React, {createContext, useState, useContext} from "react";

const themeStyles = {
    dark: {
        backgroundNav: '#000',
        textColor: '#ffffff',
        backgroundBody: '#8c8c8c',
        backgroundSecondFooter: '#000',
        logoColor: 'invert(100%)'
    },
    light: {
        backgroundNav: '#f0f0f0',
        colorFooter: '#ffffff',
        backgroundSecondFooter: '#ff0000',
        iconsColor: 'invert(100%)'
    }
}

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {theme === 'light' ? setTheme('dark') : setTheme('light')}
    const value = {
        theme: themeStyles[theme],
        toggleTheme,
        themeName: theme
    };
    return <ThemeContext.Provider value = {value} {...props}/>
}

const useTheme = () => useContext(ThemeContext)

export {ThemeProvider as default, useTheme};

