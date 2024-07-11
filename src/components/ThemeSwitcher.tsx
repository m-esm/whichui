import Image from 'next/image';
import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isLight, setIsLight] = React.useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('preferred-theme');
      if (storedTheme !== null) {
        setIsLight(storedTheme !== 'darkTheme');
      }

      const root = window.document.documentElement;
      if (storedTheme === 'darkTheme') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isLight) {
      root.classList.remove('dark');
      window.localStorage.setItem('preferred-theme', 'lightTheme');
    } else {
      root.classList.add('dark');
      window.localStorage.setItem('preferred-theme', 'darkTheme');
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div>
      <Image
        src={isLight ? '/dark.svg' : '/light.svg'}
        onClick={toggleTheme}
        height={30}
        width={30}
        alt='theme icon'
        className={`border-blue-900 border p-[3px] rounded-lg hover:bg-white dark:hover:bg-gray-500 duration-200 ${isLight ? "light-mode-switch" : "dark-mode-switch"}`} 
      />
    </div>
  );
};

export default ThemeSwitcher;
