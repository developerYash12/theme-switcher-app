import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes, ThemeType } from '../styles/themes';


interface ThemeContextType {
  theme: ThemeType;
  setThemeByName: (name: string) => void;
}


const ThemeContext = createContext<ThemeContextType>({
  theme: themes.theme1,
  setThemeByName: () => {},
});


export const useTheme = () => {
  return useContext(ThemeContext);
};


export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(themes.theme1);

 
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      setTheme(themes[savedTheme as keyof typeof themes]);
    }
  }, []);


  const setThemeByName = (name: string) => {
    const selectedTheme = themes[name as keyof typeof themes];
    if (selectedTheme) {
      setTheme(selectedTheme);
      localStorage.setItem('app-theme', name);
    }
  };


  return (
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
