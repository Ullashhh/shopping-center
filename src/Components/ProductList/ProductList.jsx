// import React from 'react';
// import { useEffect } from 'react';
import './ProductList.css'

const ProductList = ({selectProduct, clearCart, children}) => {
    // console.log(selectProduct)
    // const totalPrice = selectProduct.reduce((acc, curr) => acc * curr.quantity, 0)
    let totalPrice = 0;
    let quantity = 0;
    for(const product of selectProduct){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 0.07;
    const grandTotal = totalPrice + tax;
    return (
        <div className="productList-container">
            <h2>Order Summary</h2>
            <hr/>
            <h2>Items Selected: {quantity}</h2>
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            <h2>Tax: ${tax.toFixed(2)}</h2>
            <hr/>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <button onClick={clearCart}>Clear Cart</button>
            <br/> <br/>
            {children}
        </div>
    );
};

export default ProductList;