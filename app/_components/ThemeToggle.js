"use client";

import React, { useState, useEffect } from 'react';
import moon from "../icons/moon.svg";
import sun from "../icons/sun.svg";
import Image from 'next/image';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Setzt das Theme basierend auf dem System-Einstellungen
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkScheme ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <Image src={moon} alt="sonne" className='to-light-mode'></Image> : <Image src={sun} alt="sonne" className='to-dark-mode'></Image>}
    </button>
  );
};

export default ThemeToggle;
