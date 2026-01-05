// FormStep1 - Первый шаг формы. Ввод личных данных (имя, возраст)
import '../../../App.css'
import './FormStep1.css'

import { Link } from "react-router-dom"
import { ROUTE_PATHS } from "../data/routes";

export default function FormStep1({account, onNameChange, onAgeChange})
{
    const {name, age} = account;
    return(
        <div className="registration-step align-center-wrap">
            <div className='registration-card'>
                <label className='registration-card__field'>
                    <span>Имя</span>
                    <input type="text" value={name} onChange={e => onNameChange(e.target.value)}/>    
                </label>
                <label className='registration-card__field'>
                    <span>Возраст</span>
                    <input type="text" value={age} onChange={e => onAgeChange(e.target.value)}/>    
                </label>
                <Link className='button-next registration-card__link' to={`../${ROUTE_PATHS.REGISTER_STEP_2}`}>Далее</Link>
            </div>
        </div>
    );
}