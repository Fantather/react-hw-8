// Переключение вкладок (Lifting State Up)
// Создайте компонент Tabs, содержащий список вкладок и компонент TabContent, для отображение содержимого выбранной вкладки
// Выбранная вкладка должна: 
// 1) Подсвечиваться
// 2) Менять содержимое в TabContent

// Состояние выбранной вкладки должно храниться в общем родителе

import { ROUTE_PATHS } from "./data/routes";
import { TABS, getTabs } from "./data/tabsData";

import { Routes, Route, Outlet } from "react-router-dom";
import TabContent from "./Tab/TabContent";

import { useState } from "react";

export default function Tabs()
{
    const [activeTabId, setActiveTabId] = useState(TABS[0].id || null);
    
    // Выводятся вкладки и тело страницы
    return(
        <div>
            <header>
                {getTabs().map(({id, title}) => 
                    <button key={id} onClick={() => setActiveTabId(id)}>{title}</button>
                )}
            </header>
            <div>
                {getTabs()
                .filter(({id}) => id === activeTabId)
                .map(({id, title, content}) => 
                    <TabContent key={id} header={title} text={content} />
                )}
            </div>
        </div>
    )
}