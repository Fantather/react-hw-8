
// хранит состояние текущей темы (light / dark) и функцию переключения темы

import { useState } from "react";
import { THEMES } from "./themes";

export default function useThemeProvider()
{
    const [islightTheme, setIslightTheme] = useState(true);
    const theme = islightTheme ? THEMES.LIGHT : THEMES.DARK;
    
    function toggleTheme()
    {
        setIslightTheme(prev => !prev);
    }

    return [theme, toggleTheme];
}