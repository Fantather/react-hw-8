import { Link, useLocation } from "react-router-dom";

export default function ItemCard({id, title, price, image})
{
    const location = useLocation();
    return(
        <Link to={location.pathname + `/${id}`} className="item-card">
            <img src={image} alt="item-image" />
            <span>{title}</span>
            <b>{price}</b>
        </Link>
    )
}