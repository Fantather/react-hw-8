// Создайте компонент ThemeProvider, который хранит состояние текущей темы (light / dark)
// Создайте два дочерних компонента: 1) ThemeToggle - кнопка переключения темы
// 2) ThemePreview - отображает текущую тему текстом и стилем
// При нажатии на кнопку тема должна меняться в родителе и автоматически обновляться в обоих дочерних компонентах

import useThemeProvider from "./useThemeProvider/useThemeProvider";
import ThemeToggle from "./ThemeToggle";
import ThemePreview from "./ThemePreview/ThemePreview";

export default function ThemeProvider()
{
    const [currentTheme, toggleTheme] = useThemeProvider();

    return(
        <div>
            <ThemePreview themeCss={currentTheme}/>
            <ThemeToggle onThemeChange={toggleTheme}/>
        </div>
    );
}