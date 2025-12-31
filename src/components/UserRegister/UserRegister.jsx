// Разработайте многоступенчатую форму, в которой пользователи могут шаг за шагом заполнять различные секции данных, 
// перемещаться между шагами и сохранять данные на каждом этапе. 
// Тема – «Регистрация пользователя в игре».

// Создайте Основные Компоненты и Страницы:
// Home - Главная страница с приветствием и ссылкой на форму.
// FormStep1 - Первый шаг формы. Ввод личных данных (имя, возраст).
// FormStep2 - Второй шаг формы. Выбор игрового аватара.
// FormStep3 - Третий шаг формы. Выбор настроек и предпочтений.
// Summary - Итоговая страница с проверкой данных и подтверждением.

// Используйте React Router для маршрутизации между страницами формы и страницей с итогами.


//ToDo:
// Нужно создать стиль, для кнопки перехода к следующей форме и я думаю стоит разместить его в App.css
// Нужно добавить стили в первую форму
// Нужно добаить стили во вторую форму, по плану слева будет список иконок, а справа большая выбранная иконка
// В той же второй форме нужно пожалуй img сделать вертикальным


import { ROUTE_PATHS } from "./data/routes"

import Home from "./Home/Home"
import FormStep1 from "./FormStep1/FormStep1"
import FormStep2 from "./FormStep2/FormStep2"
import FormStep3 from "./FormStep3/FormStep3"
import Summary from "./Summary/Summary"

import { Routes, Route } from "react-router-dom"
import useAccount from "./hooks/useAccount"


export default function UserRegister()
{
    const {account, setName, setAge, setAvatar, changeSettings} = useAccount();

    return(
        <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />}></Route>
            <Route path={ROUTE_PATHS.REGISTER_STEP_1} element={<FormStep1 account={account} onNameChange={setName} onAgeChange={setAge}/>}></Route>
            <Route path={ROUTE_PATHS.REGISTER_STEP_2} element={<FormStep2 avatar={account.avatar} onIconChoose={setAvatar}/>}></Route>
            <Route path={ROUTE_PATHS.REGISTER_STEP_3} element={<FormStep3 settings={account.settings} onChangeSettings={changeSettings} />}></Route>
            <Route path={ROUTE_PATHS.SUMMARY} element={<Summary account={account} />} />
        </Routes>
    )
}