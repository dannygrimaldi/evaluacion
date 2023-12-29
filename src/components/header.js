import Dropdown from './dropdown';
import { useTheme } from 'next-themes';
import Logo from './Logo';
import React, { useEffect, useState } from 'react';
import '../styles/index.css';




function Header() {

 const { theme } = useTheme();

 const [opacity, setOpacity] = useState(1);

 useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Ajusta este valor según tus preferencias
    const opacityValue = 1 - (scrollPosition / maxScroll);

    setOpacity(opacityValue > 0 ? opacityValue : 0);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);



  return (
    <header
    className={`top-0 left-0 right-0  ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800'
        : 'bg-white'
    } transition duration-400 text-white py-4 px-6 flex justify-between items-center fixed backdrop-blur-xl bg-white/30 `}
    style={{ opacity }}
  >
      <div className="text-2xl font-bold">
      <Logo />
      </div>
      <div className={`text-2xl font-bold ${theme === 'dark' ? '' : 'text-black'}`}>Evaluaciones</div>
      <div className="relative inline-block text-left">
        <Dropdown />
      </div>
    </header>
  );
}



export default Header;