// import React from 'react';

import { useState } from "react";
import OrderProduct from "../OrderProduct/OrderProduct";
import ProductList from "../ProductList/ProductList";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(products);
  const handleDelete = (id) => {
    const remainedItems = cart.filter(item => item.id !== id)
    setCart(remainedItems)
    removeFromDb(id)
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart()
  }
  // console.log(products)
  return (
    <div className="products">
      <div className="">
        <div>
          {cart.map((product) => (
            <OrderProduct
              key={product.id}
              product={product}
              onHandleDelete={handleDelete}
            ></OrderProduct>
          ))}
        </div>
      </div>
      <div>
        <ProductList selectProduct={cart} clearCart={clearCart}>
            <button>Proceed Chekout</button>
        </ProductList>
      </div>
    </div>
  );
};

export default Order;
