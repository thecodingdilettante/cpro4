'use client';
import { useEffect, useState } from 'react';
import CategoryFilter from "./CategoryFilter.jsx";
import ProductList from "./ProductList.jsx"

export default function Catalog() {
    const [products, setProducts] = useState([])
    const [chosenCategory, setChosenCategory] = useState('')

    useEffect(() => {
        fetch('./api/products/route.js')
        .then(response => response.json())
        .then(setProducts)
        .catch(console.error);
},  []);

    return (
        <div>
            <h1>Mini Storefront</h1>
            <br></br>
            <CategoryFilter
                chosenCategory={chosenCategory} 
                setChosenCategory={setChosenCategory}
                />
            <ProductList products={products} chosenCategory={chosenCategory}/>
        </div>
    );
}