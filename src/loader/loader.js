import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProducts = await fetch("https://fakestoreapi.com/products");
    const products = await loadedProducts.json();
    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id == id)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }
    // console.log(storedCart)
    return savedCart
    // console.log(products)
}

export default cartProductLoader