// import React from 'react';
import './OrderProduct.css'

const OrderProduct = ({product, onHandleDelete}) => {
    return (
      <div className="order-product-section">
        <img src={product.image} alt="" />
        <div className='order-info'>
          <div>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
          <button onClick={() => onHandleDelete(product.id)}>Delete</button>
        </div>
      </div>
    );
};

export default OrderProduct;