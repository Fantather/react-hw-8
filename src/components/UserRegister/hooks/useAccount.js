import { useState } from "react";

export default function useAccount()
{
    const [account, setAccount] = useState({
        name: '',
        age: '',
        avatar: {},
        settings: {
            pvpEnable: true,
            screenBrightness: 50
        }
    });

    function setName(newName)
    {
        setAccount(prev => ({...prev, name: newName}));
    }

    function setAge(newAge)
    {
        setAccount(prev => ({...prev, age: newAge}));
    }
    
    function setAvatar(id, src, alt)
    {
        setAccount(prev => ({...prev, avatar: {id, src, alt}}));
    }

    function changeSettings(settingsName, newValue)
    {
        setAccount(prev => {
            const newSettings = {...prev.settings, [settingsName]:newValue};
            return {...prev, settings: newSettings}
        });
    }

    return {account, setName, setAge, setAvatar, changeSettings};
}