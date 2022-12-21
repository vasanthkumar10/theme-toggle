import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';
export const ThemeContext = createContext();

const currentTheme = localStorage.getItem('theme');
const initialTheme = currentTheme ? currentTheme : 'light';

function App() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app-${theme}`}>
        <Form />
        <Button text={'Toggle'} action={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
