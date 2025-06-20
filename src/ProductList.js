import React, { useState } from 'react';
import ProductItem from './ProductItem';

const productsData = [
    {
        id: 1,
        name: 'Wireless Mouse',
        description: 'A smooth and precise wireless mouse',
        price: 29.99,
    },
    {
        id: 2,
        name: 'Gaming Keyboard',
        description: 'Mechanical keyboard with RGB lighting',
        price: 89.99,
    },
    {
        id: 3,
        name: 'USB-C Hub',
        description: 'Multi-port USB-C hub with HDMI and USB 3.0',
        price: 49.99,
    },
    {
        id: 4,
        name: 'Webcam HD',
        description: '1080p webcam for video conferencing',
        price: 59.99,
    },
];

function ProductList() {
    const [search, setSearch] = useState('');

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="product-list">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))
            ) : (
                <p className="no-results">No products found.</p>
            )}
        </div>
    );
}

export default ProductList;
