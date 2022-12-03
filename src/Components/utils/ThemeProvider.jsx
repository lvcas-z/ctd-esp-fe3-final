import React, {createContext, useState, useContext} from "react";

const themeStyles = {
    dark: {
        backgroundNav: '#000',
        textColor: 'white'
    },
    light: {
        backgroundNav: '#f0f0f0',
        colorFooter: '#ffffff',
        backgroundFooter: '#ff0000'
    }
}

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {theme === 'light' ? setTheme('light') : setTheme('dark')}
    const value = {
        theme: themeStyles[theme],
        toggleTheme,
        themeName: theme
    };
    return <ThemeContext.Provider value = {value} {...props}/>
}

const useTheme = () => useContext(ThemeContext)

export {ThemeProvider as default, useTheme};

