import { useEffect, useState } from "react";

export default function useFetch(path)
{
    const [data, setData] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(path);
            setData(await response.json());
        }
        fetchData();
    }, [path])

    return [data];
}