import {Product} from "./types";
import ProductItem from "./ProductItem";

const ProductTable = ({products, handleAddToCart}: { products: Product[], handleAddToCart:  (product: Product) => void}) =>
        <section>
            <div className="container py-5">
                <h2>Products</h2>
                <div className="row">
                    {products.map((product) => (
                        <ProductItem item={product} handleAddToCart={handleAddToCart} key={product.id} />
                    ))}
                </div>
            </div>
        </section>;
export default ProductTable
