import React, { useEffect, useState } from 'react';
import ProductList from './componets/ProductList';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:5000/api/scraper');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ProductList products={products} />
        </div>
    );
}

export default App;
