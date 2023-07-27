import ProductTable from "./ProductTable"
import ProductCart from "./ProductCart"
import {useEffect, useState} from "react";
import {Product} from "./types";

export const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    const handleRemoveFromCart = (id) => {
        setCartItems(cartItems.splice(id, 1));
    };
    return <>
        <div className="App">
            <div className="row">
                <div className="col-md-6">
                    <ProductTable products={products} handleAddToCart={handleAddToCart} />
                </div>
                <div className="col-md-6">
                    <ProductCart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
                </div>
            </div>
        </div>
    </>;
}

export default App
