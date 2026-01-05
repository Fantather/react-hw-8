// Создайте приложение, которое отображает список категорий 
// и позволяет пользователю просматривать детали элементов в выбранной категории

// Пользователь сможет: 
// 1) Выбрать категорию из списка
// 2) Перейти к списку элементов в выбранной категории
// 3) Нажать на элемент для просмотра его деталей
import './Shop.css'

import useFetch from "./useFetch";
import { Routes, Route } from "react-router-dom";

import CategoryList from "./CategoryList/CategoryList";
import ItemsList from "./ItemsList/ItemsList";
import ItemDetails from "./ItemDetails/ItemDetails";

const API_BASE = 'https://fakestoreapi.com';

export default function Shop()
{
    const [categories] = useFetch('https://fakestoreapi.com/products/categories');
    return(
        <div className="shop-layout">
            <CategoryList categories={categories}/>
            <div className="shop-content">
                <Routes>
                    <Route path="/:category" element={<ItemsList rootPath={API_BASE} />} ></Route>
                    <Route path="/:category/:id" element={<ItemDetails rootPath={API_BASE} />} ></Route>
                </Routes>
            </div>
        </div>
    )
}