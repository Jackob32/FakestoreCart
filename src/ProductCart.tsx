import {Product} from "./types";
import ProductCartItem from "./ProductCartItem";

const ProductTable = ({
                          cartItems,
                          handleRemoveFromCart
                      }: { cartItems: Product[], handleRemoveFromCart: (id: number) => void }) => {
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price || 0,
        0
    );

    return <section>
        <div className="container py-5">
            <h2>Cart</h2>
            <div className="row">
                <div className="col-lg-12">
                    {cartItems.map((product, i) => (
                        <ProductCartItem item={product} i={i} handleRemoveFromCart={handleRemoveFromCart}/>
                    ))}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <p className="mb-0">You have {cartItems?.length} items in your cart</p>
                        </div>
                        <div>
                            <p className="mb-0">Total: ${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};
export default ProductTable
