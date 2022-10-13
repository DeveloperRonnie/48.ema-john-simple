import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const { handleAddToCard } = props;

    return (
        <div>
            <div className="product">
                <div className="product-info">
                    <img src={img} alt=" " />
                    <h4 className='product-name'>{name}</h4>
                    <h5>Price: {price}</h5>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>

                </div>
                <button onClick={() => props.handleAddToCard(props.product)} className='btn-card'>
                    <p className='btn-text'>Add To Card </p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;