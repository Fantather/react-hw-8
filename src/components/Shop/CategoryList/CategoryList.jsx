// Отображает список категорий, позволяет выбрать категорию из списка 

import './CategoryList.css'

import { Link } from "react-router-dom";


export default function CategoryList({categories})
{
    return(
        <div className='category-list'>
            {categories === undefined ? 
            "Загрузка..." 
            : categories.map(
                category => <Link to={`/task4/${category}`} key={category}>{category}</Link>
            )}
        </div>
    )
}