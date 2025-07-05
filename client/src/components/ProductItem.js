import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext'; // ✅ fixed
import './ProductItem.css';


const ProductItem = ({ product }) => {
    const { addToCart, removeFromCart } = useContext(ItemContext); // ✅ fixed

    const handleAddToCart = (product) => {
        console.log(product);
        addToCart(product);
    };

    const handleRemoveToCart = (product) => {
        console.log("product removed", product);
        removeFromCart(product);
    };

    return (
        <div className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-details">
                <h3 style={{ fontWeight: "700" }}>{product.name}</h3>
                <p style={{ fontWeight: "300" }}>{product.description}</p>
                <p style={{ fontWeight: "500" }}>Price: {product.price} Rs</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button onClick={() => handleRemoveToCart(product)}>-</button>
            </div>
        </div>
    );
};

export default ProductItem;
