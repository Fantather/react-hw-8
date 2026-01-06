// Создайте приложение «Личный кабинет». 
// Страницы и компоненты: 
// /profile - главная страница профиля 
// /profile/info - личная информация 
// /profile/security - настройки безопасности 
// /profile/notifications - уведомления 

// Требования: 
// 1) Используйте вложенные маршруты (Outlet). 
// 2) Реализуйте боковое меню для навигации между разделами. 
// 3) Переключение разделов выполняйте через useNavigate. 
// 4) По умолчанию при заходе на /profile должен открываться /profile/info.

import './PersonalAccount.css'
import { ROUTE_PATHS } from './data/routes';

import { Routes, Route, Navigate } from 'react-router-dom';

import ProfileLayout from './ProfileLayout/ProfileLayout';
import Info from './ProfileLayout/Info/Info';
import Security from './ProfileLayout/Security/Security';
import Notifications from './ProfileLayout/Notifications/Notifications';

const image = 'https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png';

export default function PersonalAccount()
{
    return(
        <Routes>
            <Route path='/' element={<Navigate to={ROUTE_PATHS.HOME}/>}/>
            <Route path={ROUTE_PATHS.HOME} element={<ProfileLayout />}>
                <Route index element={<Navigate to={ROUTE_PATHS.INFO} replace />} />

                <Route path={ROUTE_PATHS.INFO} element={<Info avatar={image} name='Tod' age={30} gender={'Male'} />} />
                <Route path={ROUTE_PATHS.SECURITY} element={<Security />} />
                <Route path={ROUTE_PATHS.NOTIFICATIONS} element={<Notifications />} />
            </Route>
        </Routes>
    );
}