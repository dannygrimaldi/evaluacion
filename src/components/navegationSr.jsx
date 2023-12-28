import React, { useState, useEffect, useRef } from 'react';
import '../styles/Sidebar.css';
import '../styles/add.css';
import 'jquery/dist/jquery.min.js'; // Importa jQuery
import Logo2 from './logo2';
import TodoList2 from './PRUEBAS';

const MyComponent = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
    <body classname="snippet-body" id="body-pd" class={`${isNavbarVisible ? 'body-pd ' : ''}`} >
      <header className={`header ${isNavbarVisible ? 'body-pd' : ''}`} id="header">
        <div className="header_toggle" onClick={toggleNavbar}>
                
                <i className={`bx bx-menu ${isNavbarVisible ? ' bx-x' : ''}`} id="header-toggle" />
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div className={`l-navbar ${isNavbarVisible ? 'show' : ''}`} id="nav-bar" > 
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo">
              <i className="bx  nav_logo-icon" /><Logo2/>
              <span className="nav_logo-name"></span>
            </a>
            <div className="nav_list">
              <a href="#" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon" />
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-user nav_icon" />
                <span className="nav_name">Users</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-message-square-detail nav_icon" />
                <span className="nav_name">Messages</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-bookmark nav_icon" />
                <span className="nav_name">Bookmark</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-folder nav_icon" />
                <span className="nav_name">Files</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon" />
                <span className="nav_name">Stats</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon" />
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
      {/* Container Main start */}
      <div className="">
        <h4>Main Components</h4>
        <TodoList2/>
      </div>
      </body>
    </>
  );
};

export default MyComponent;