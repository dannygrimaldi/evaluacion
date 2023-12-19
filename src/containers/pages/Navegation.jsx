import React, { useEffect } from 'react';
import EventMenu, { initializeNavbar } from '../../components/navegationSr.js';
import '../../styles/estilospro.css';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery.min.js'; // Importa jQuery
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
});

function SidebarMenu() {
    useEffect(() => {
        // Inicializa la barra de navegación
        initializeNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

        // Usa la función importada
   
    }, []);

  
  
  return ( 
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Snippet - BBBootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{__html: "::-webkit-scrollbar {\n                                  width: 8px;\n                                }\n                                /* Track */\n                                ::-webkit-scrollbar-track {\n                                  background: #f1f1f1; \n                                }\n                                 \n                                /* Handle */\n                                ::-webkit-scrollbar-thumb {\n                                  background: #888; \n                                }\n                                \n                                /* Handle on hover */\n                                ::-webkit-scrollbar-thumb:hover {\n                                  background: #555; \n                                } @import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap\");:root{--header-height: 3rem;--nav-width: 68px;--first-color: #4723D9;--first-color-light: #AFA5D9;--white-color: #F7F6FB;--body-font: 'Nunito', sans-serif;--normal-font-size: 1rem;--z-fixed: 100}*,::before,::after{box-sizing: border-box}body{position: relative;margin: var(--header-height) 0 0 0;padding: 0 1rem;font-family: var(--body-font);font-size: var(--normal-font-size);transition: .5s}a{text-decoration: none}.header{width: 100%;height: var(--header-height);position: fixed;top: 0;left: 0;display: flex;align-items: center;justify-content: space-between;padding: 0 1rem;background-color: var(--white-color);z-index: var(--z-fixed);transition: .5s}.header_toggle{color: var(--first-color);font-size: 1.5rem;cursor: pointer}.header_img{width: 35px;height: 35px;display: flex;justify-content: center;border-radius: 50%;overflow: hidden}.header_img img{width: 40px}.l-navbar{position: fixed;top: 0;left: -30%;width: var(--nav-width);height: 100vh;background-color: var(--first-color);padding: .5rem 1rem 0 0;transition: .5s;z-index: var(--z-fixed)}.nav{height: 100%;display: flex;flex-direction: column;justify-content: space-between;overflow: hidden}.nav_logo, .nav_link{display: grid;grid-template-columns: max-content max-content;align-items: center;column-gap: 1rem;padding: .5rem 0 .5rem 1.5rem}.nav_logo{margin-bottom: 2rem}.nav_logo-icon{font-size: 1.25rem;color: var(--white-color)}.nav_logo-name{color: var(--white-color);font-weight: 700}.nav_link{position: relative;color: var(--first-color-light);margin-bottom: 1.5rem;transition: .3s}.nav_link:hover{color: var(--white-color)}.nav_icon{font-size: 1.25rem}.show{left: 0}.body-pd{padding-left: calc(var(--nav-width) + 1rem)}.active{color: var(--white-color)}.active::before{content: '';position: absolute;left: 0;width: 2px;height: 32px;background-color: var(--white-color)}.height-100{height:100vh}@media screen and (min-width: 768px){body{margin: calc(var(--header-height) + 1rem) 0 0 0;padding-left: calc(var(--nav-width) + 2rem)}.header{height: calc(var(--header-height) + 1rem);padding: 0 2rem 0 calc(var(--nav-width) + 2rem)}.header_img{width: 40px;height: 40px}.header_img img{width: 45px}.l-navbar{left: 0;padding: 1rem 1rem 0 0}.show{width: calc(var(--nav-width) + 156px)}.body-pd{padding-left: calc(var(--nav-width) + 188px)}}" }} />
    <header className="header" id="header">
      <div className="header_toggle"> <i className="bx bx-menu" id="header-toggle" /> </div>
      <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>
    </header>
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div> <a href="#" className="nav_logo"> <i className="bx bx-layer nav_logo-icon" /> <span className="nav_logo-name">BBBootstrap</span> </a>
          <div className="nav_list"> <a href="#" className="nav_link active"> <i className="bx bx-grid-alt nav_icon" /> <span className="nav_name">Dashboard</span> </a> <a href="#" className="nav_link"> <i className="bx bx-user nav_icon" /> <span className="nav_name">Users</span> </a> <a href="#" className="nav_link"> <i className="bx bx-message-square-detail nav_icon" /> <span className="nav_name">Messages</span> </a> <a href="#" className="nav_link"> <i className="bx bx-bookmark nav_icon" /> <span className="nav_name">Bookmark</span> </a> <a href="#" className="nav_link"> <i className="bx bx-folder nav_icon" /> <span className="nav_name">Files</span> </a> <a href="#" className="nav_link"> <i className="bx bx-bar-chart-alt-2 nav_icon" /> <span className="nav_name">Stats</span> </a> </div>
        </div> <a href="#" className="nav_link"> <i className="bx bx-log-out nav_icon" /> <span className="nav_name">SignOut</span> </a>
      </nav>
    </div>
    {/*Container Main start*/}
    <div className="height-100 bg-light">
      <h4>Main Components</h4>
    </div>
    {/*Container Main end*/}
  </div>

  );
}

export default SidebarMenu;



