import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import ProductList from "../ProductList/ProductList";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);
  const onHandleProduct = (newProduct) => {
    setSelectProduct([...selectProduct, newProduct]);
    addToDb(newProduct.id);
  };

  const clearCart = () => {
    setSelectProduct([]);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCard = getShoppingCart();
    const savedProducts = [];
    for (const id in storedCard) {
      const savedProduct = products.find((product) => product.id == id);
      if (savedProduct) {
        const quantity = storedCard[id];
        savedProduct.quantity = quantity;
        savedProducts.push(savedProduct);
      }
    }
    setSelectProduct(savedProducts);
  }, [products]);

  return (
    <div className="products">
      <div className="products-item">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onHandleProduct={onHandleProduct}
          ></Product>
        ))}
      </div>
      <div>
        <ProductList
          selectProduct={selectProduct}
          clearCart={clearCart}
        ><Link to="/order"><button>Review Order</button></Link></ProductList>
      </div>
    </div>
  );
};

export default Products;
