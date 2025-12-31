import InfoLine from "./InfoLine";
import './Summary.css';

export default function Summary({account})
{
    const {name, age, avatar, settings} = account;
    const {src, alt} = avatar;
    const {pvpEnable, screenBrightness} = settings;

    return(
        <div className="registration-step align-center-wrap">
            <div className="registration-card summary-card-width">
                
                <div className="summary-section">
                    <h3 className="summary-title">Данные аккаунта</h3>
                    <img className="summary-avatar" src={src} alt={alt} />
                    <InfoLine label={'Имя'} value={name} />
                    <InfoLine label={'Возраст'} value={age} />
                </div>
                
                <div className="summary-section">
                    <h3 className="summary-title">Настройки</h3>
                    <InfoLine label={'PvP'} value={pvpEnable ? "Разрешено" : "Запрещено"} />
                    <InfoLine label={'Яркость'} value={screenBrightness} />
                </div>
            </div>
        </div>
    );
}