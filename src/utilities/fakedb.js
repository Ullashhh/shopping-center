const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };




// manage order cart from localStorage
// useEffect(() => {
//   const storedCard = getShoppingCart();
//   const savedProducts = [];
//   for (const id in storedCard) {
//     const savedProduct = products.find((product) => product.id == id);
//     if (savedProduct) {
//       const quantity = storedCard[id];
//       savedProduct.quantity = quantity;
//       savedProducts.push(savedProduct);
//     }
//   }
//   setSelectProduct(savedProducts);
// }, [value got from api got through fetch data]);


// order cart structure 
// const ProductList = ({ selectProduct }) => {
//   // console.log(selectProduct)
//   // const totalPrice = selectProduct.reduce((acc, curr) => acc * curr.quantity, 0)
//   let totalPrice = 0;
//   let quantity = 0;
//   for (const product of selectProduct) {
//     product.quantity = product.quantity || 1;
//     totalPrice = totalPrice + product.price * product.quantity;
//     quantity = quantity + product.quantity;
//   }
//   const tax = totalPrice * 0.07;
//   const grandTotal = totalPrice + tax;
//   return (
//     <div className="productList-container">
//       <h2>Order Summary</h2>
//       <hr />
//       <h2>Items Selected: {quantity}</h2>
//       <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
//       <h2>Tax: ${tax.toFixed(2)}</h2>
//       <hr />
//       <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
//     </div>
//   );
// };

// export default ProductList;