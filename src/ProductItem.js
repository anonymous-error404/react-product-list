import React from 'react';

function ProductItem({ product }) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="price">${product.price.toFixed(2)}</span>
        </div>
    );
}

export default ProductItem;
