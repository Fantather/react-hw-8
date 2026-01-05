import { useParams } from "react-router-dom"
import ItemCard from "./ItemCard/ItemCard"
import useFetch from "../useFetch";

export default function ItemsList({rootPath}) {
    const {category} = useParams();
    const [items] = useFetch( rootPath + `/products/category/${category}`);
    return(
        <div className="items-list">
            {items === undefined ?
            "Загрузка..." 
            : items.map(item => <ItemCard key={item.id} {...item} /> )}
        </div>
    )
}