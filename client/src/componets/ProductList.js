import React from 'react';

const ProductList = ({ products }) => {
    return (
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                        {product.title} - {product.price}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
