// Home - Главная страница с приветствием и ссылкой на форму.
import '../../../App.css'
import './Home.css'

import { Link } from "react-router-dom"
import { ROUTE_PATHS } from "../data/routes"

export default function Home()
{
    return(
        <section className='registration-step align-center-wrap'>
            <div className='registration-card home-card'>
                <h3>Welcome to Speranza, Raider</h3>
                <Link className='button-next' to={ROUTE_PATHS.REGISTER_STEP_1}>Назвать себя</Link>
            </div>
        </section>
    )
}