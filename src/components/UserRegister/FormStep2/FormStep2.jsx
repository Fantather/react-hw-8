import './FormStep2.css'
import '../../../App.css'

import { getUserAvatars } from '../data/avatars';
import { ROUTE_PATHS } from '../data/routes';

import { Link } from "react-router-dom";

export default function FormStep2({avatar, onIconChoose})
{
    return(
        <section className='registration-step'>
            <div className='avatar-selector'>
                <div className='sticky-wrapper'>
                    <img 
                        className="avatar-selector__preview" 
                        src={avatar.src} 
                        alt={avatar.alt} 
                    />
                </div>
                <div className="avatar-selector__list">
                    {getUserAvatars().map(({id, src, alt}) => (
                        <img 
                            className="avatar-selector__item" 
                            onClick={() => onIconChoose(id, src, alt)} 
                            src={src} 
                            alt={alt}
                            key={id} 
                        />
                    ))}
                </div>
            </div>
            <Link className="button-next" to={ROUTE_PATHS.REGISTER_STEP_3}>ДАЛЕЕ</Link>
        </section>
    )
}