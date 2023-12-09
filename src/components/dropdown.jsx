import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { UserIcon } from "./UserIcon";
import { useTheme } from 'next-themes';


export default function App() {
  const [selectedColor] = useState("default");
  const variants = ["light"];
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'capitalize text-withe' : 'capitalize text-black';

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
              45083732
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
            <DropdownItem key="Logout" className="text-primary" color="danger">
              Logout
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ))}
    </div>
  );
}