import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css'


const Header = () => {
  const { theme, setThemeByName } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    setThemeByName(selectedTheme);
  };

  return (
    <header
      className='header'
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.font
      }}
    >
      <div className='logo'>
        🌈 Theme Switcher App
      </div>

      <select
        className='select'
        value={theme.name}
        onChange={handleThemeChange}
        style={{
          background: theme.background,
          color: theme.color,
          fontFamily: theme.font
        }}
      >
        
        <option value="theme1">Theme 1</option>
     
        <option value="theme2">Theme 2</option>
       
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;
