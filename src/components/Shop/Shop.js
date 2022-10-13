import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCard = (product) => {
        console.log(product);
        // card.push(product);
        const newCard = [...card, product];
        setCard(newCard);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="product-container">
                <h4>this is shop container</h4>
                <h4>selected items {card.length} </h4>
            </div>

            <h5>{products.length}</h5>

        </div>
    );
};

export default Shop;