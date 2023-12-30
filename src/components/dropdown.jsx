import React, { useState, useContext } from "react";
import React, { useState, useContext } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { UserIcon } from "./UserIcon";
import { useTheme } from 'next-themes';
import AuthContext from '../context/AuthContext';

import AuthContext from '../context/AuthContext';



export default function App() {
  const [selectedColor] = useState("default");
  const variants = ["light"];
  const { theme } = useTheme();
  const { user, logoutUser } = useContext(AuthContext);
  const textColor = theme === 'dark' ? 'capitalize text-withe' : 'capitalize text-black';
  
  const handleLogout = () => {
    logoutUser();
    // Puedes realizar otras acciones después de cerrar sesión, por ejemplo, redirigir a la página de inicio de sesión.
  };

  return (
    <div className="flex flex-wrap gap-4 dark">
      {variants.map((variant) => (
        <Dropdown key={variant} backdrop="blur">
          <DropdownTrigger>
            <Button
              color={selectedColor}
              variant={variant}
              className={textColor}
            ><UserIcon className="w-4 mr-1" />
              {user ? user.username : 'Guest'}
              {user ? user.username : 'Guest'}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dropdown Variants"
            color={selectedColor}
            variant={variant}
          >
            <DropdownItem key="themeswitch">
              <ThemeSwitcher/>
              </DropdownItem>
            <DropdownItem key="Logout" className="text-primary" color="danger" onClick={handleLogout}>
              Logout
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ))}
    </div>
  );
}