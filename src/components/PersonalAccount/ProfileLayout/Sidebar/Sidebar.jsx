// 2) Реализуйте боковое меню для навигации между разделами
// 3) Переключение разделов выполняйте через useNavigate. 
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar({sections, className})
{
    const navigate = useNavigate();
    return(
        <section className={className}>
            {sections.map(({name, path}) => <div className='section' onClick={() => navigate(path)} key={name}>{name}</div>)}
        </section>
    )
}