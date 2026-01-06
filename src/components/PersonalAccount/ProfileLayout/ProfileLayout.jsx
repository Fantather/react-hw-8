import { Outlet } from 'react-router-dom'
import './ProfileLayout.css'

import { ROUTE_PATHS } from '../data/routes'

import Sidebar from './Sidebar/Sidebar'

const SECTIONS = [
    {name: 'Info', path: ROUTE_PATHS.INFO},
    {name: 'Security', path: ROUTE_PATHS.SECURITY},
    {name: 'Notifications', path: ROUTE_PATHS.NOTIFICATIONS}
]

export default function ProfileLayout()
{
    return(
        <div className='profile-layout'>
            <Sidebar className="sidebar" sections={SECTIONS} />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}