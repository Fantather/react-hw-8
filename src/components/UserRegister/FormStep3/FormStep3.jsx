import '../../../App.css';
import './FormStep3.css';

import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../data/routes";

export default function FormStep3({settings, onChangeSettings})
{
    const {pvpEnable, screenBrightness} = settings;
    return(
        <div className='registration-step align-center-wrap'>
            <div className='registration-card'>
                <div className='settings-form__field'>
                    <span>Разрешить PvP</span>
                    <input type="checkbox" onChange={e => onChangeSettings("pvpEnable", e.target.checked)} checked={pvpEnable} />
                </div>
                <div className='settings-form__field'>
                    <span>Яркость</span>
                    <input type="range" onChange={e => onChangeSettings("screenBrightness", e.target.value)} value={screenBrightness} />
                </div>
                <Link className='button-next' to={ROUTE_PATHS.SUMMARY}>К подтверждению</Link>
            </div>
        </div>
    );
}