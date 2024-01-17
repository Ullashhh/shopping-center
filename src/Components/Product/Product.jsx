// import React from 'react';
import './Product.css';

const Product = ({product, onHandleProduct}) => {
    return (
        <div className='product-container'>
            <img src={product.image} alt="image of {product.title}"/>
            <hr/>
            <div className='product-container_info'>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating.rate} out of 5.0</p>
                <p>Rating Count: {product.rating.count}</p>
                <button onClick={() => onHandleProduct(product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;