// Переключение вкладок (Lifting State Up)
// Создайте компонент Tabs, содержащий список вкладок и компонент TabContent, для отображение содержимого выбранной вкладки
// Выбранная вкладка должна: 
// 1) Подсвечиваться
// 2) Менять содержимое в TabContent

// Состояние выбранной вкладки должно храниться в общем родителе
import './Tabs.css'

import { TABS, getTabs } from "./data/tabsData";

import TabContent from "./Tab/TabContent";

import { useState } from "react";
import clsx from 'clsx';

export default function Tabs()
{
    const [activeTabId, setActiveTabId] = useState(TABS[0].id || null);
    const activeTab = getTabs().find(({id}) => id === activeTabId);

    // Выводятся вкладки и тело страницы
    return(
        <div>
            <header>
                {getTabs().map(({id, title}) => 
                    <button className={clsx({'active': id === activeTabId})} key={id} onClick={() => setActiveTabId(id)}>{title}</button>
                )}
            </header>
            <div>
                {activeTab !== undefined && <TabContent key={activeTab.id} header={activeTab.title} text={activeTab.content} />}
            </div>
        </div>
    )
}