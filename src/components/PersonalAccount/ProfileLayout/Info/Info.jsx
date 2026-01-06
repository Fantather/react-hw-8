// /profile/info - личная информация 
import './Info.css'

export default function Info({avatar, name, age, gender})
{
    return(
        <div className='profile'>
            <img className='profile__avatar' src={avatar} alt='avatar' />
            <div className='profile__text'>
                <b>{name}</b>
                <div>
                    <span>Возраст:</span>
                    <span>{age}</span>
                </div>
                <div>
                    <span>Пол:</span>
                    <span>{gender}</span>
                </div>
            </div>
        </div>
    )
}