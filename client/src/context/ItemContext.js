import React, { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products'); // Adjust if needed
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);
    const addToCart = (product) => {   
        setItemsInCart(prev => prev + 1);
        setTotalPrice(prev => prev + product.price);
    };
    const removeFromCart = (product) => {
        setItemsInCart(prev => Math.max(0, prev - 1));
        setTotalPrice(prev => Math.max(0, prev - product.price));
    };
    return (
        <ItemContext.Provider value={{ products, setProducts, itemsInCart, totalPrice, addToCart, removeFromCart }}>
            {children}
        </ItemContext.Provider>
    );
};
