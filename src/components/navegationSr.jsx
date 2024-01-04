import React, { useState, useEffect, useRef } from 'react';
//import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import Logo2 from './logo2';
import TodoList from './list';
import { useTheme } from 'next-themes';
import '../styles/Sidebar.css';
import '../styles/add.css';
import 'jquery/dist/jquery.min.js';
import Dropdown from './dropdown'
const MyComponent = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Calificaciones');
  const { theme } = useTheme();

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  return (
    <>
      <body className={`snippet-body ${theme}`} id="body-pd" class={`${isNavbarVisible ? 'body-pd ' : ''}`}>
                <header className={`header ${isNavbarVisible ? 'body-pd' : ''} ${theme}`} id="header">
                    <div className="header_toggle" onClick={toggleNavbar}>
                        <i className={`bx bx-menu ${isNavbarVisible ? ' bx-x' : ''}`} id="header-toggle" />
                    </div>
                    <div className="header_img">
                        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
                    </div>
                </header>
        <div className={`l-navbar ${isNavbarVisible ? 'show' : ''}`} id="nav-bar">
          <nav className="nav">
            <div>
              <a href="#" className="nav_logo">
                <i className="bx  nav_logo-icon" /><Logo2 />
                <span className="nav_logo-name"></span>
              </a>
              <div className="nav_list">
                <a
                  href="#"
                  className={`nav_link ${selectedNavItem === 'Calificaciones' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('Calificaciones')}
                >
                  <i className="bx bx-grid-alt nav_icon" />
                  <span className="nav_name">Calificaciones</span>
                </a>
                <a
                  href="#"
                  className={`nav_link ${selectedNavItem === 'Gestionar' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('Gestionar')}
                >
                  <i className="bx bx-user nav_icon" />
                  <span className="nav_name">Gestionar</span>
                </a>
                {/* Otras opciones de navegación */}
              </div>
            </div>
            <a href="#" className="nav_link">
              <i className="bx bx-log-out nav_icon" />
              <span className="nav_name">SignOut</span>
            </a>
            <Dropdown/>
          </nav>
        </div>
        {/* Container Main start */}
        <div className="">
          {selectedNavItem === 'Calificaciones' && <h2><TodoList/></h2>}
          {selectedNavItem === 'Gestionar' && <h2>Contenido de Gestionar</h2>}
          {/* Agrega más condicionales para otras opciones de navegación */}
        </div>
      </body>
    </>
  );
};

export default MyComponent;
