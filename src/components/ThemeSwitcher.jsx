"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon} from "@nextui-org/shared-icons";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (


    <div>
  {theme === "light" ? (
    <button onClick={() => setTheme("dark")} className="flex flex-wrap gap-4 items-center">
      <MoonIcon className="mr-10" /> Dark
    </button>
  ) : (
    <button onClick={() => setTheme("light")} className="flex flex-wrap gap-4 items-center">
      <SunIcon className="mr-10" /> Light
    </button>
  )}
</div>


  
  )
};