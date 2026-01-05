import './ItemDetails.css'

import { useParams } from "react-router-dom";
import useFetch from "../useFetch"

export default function ItemDetails({rootPath})
{
    const {id} = useParams();
    const [item] = useFetch(rootPath + `/products/${id}`);

    if (!item) {
        return <div>Загрузка...</div>;
    }
    
    const {image, title, price, categoryItem, description} = item;
    return(
        <div className="items-details">
            <div className="other-data-card">
                <img src={image} alt="item-image" />
                <span>{title}</span>
                <span>{categoryItem}</span>
                <b>{price}</b>
            </div>
            <div className="description-card">{description}</div>
        </div>
    );
}