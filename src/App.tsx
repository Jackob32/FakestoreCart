import ProductTable from "./ProductTable"
import {useEffect, useState} from "react";
import {Product} from "./types";

export const App = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => setProducts(data))
    }, []);

    return <>
        <ProductTable products={products}/>
    </>;
}

export default App
