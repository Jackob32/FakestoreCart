import {Product} from "./types";

const ProductTable = ({cartItems, handleRemoveFromCart}: { cartItems: Product[], handleRemoveFromCart:  (id: number) => void }) => {
    const totalPrice=cartItems.reduce(
        (acc, item) => acc + item.price || 0,
        0
    );

    return (
        <section>
            <div className="container py-5">
                <h2>Cart</h2>
                <div className="row">
                    <div className="col-lg-12">
                        {cartItems.map((product,i) => (
                            <div className="card mb-3" key={i}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                                <img
                                                    src={product.image}
                                                    className="img-fluid rounded-3 w-25" alt="Product item"/>
                                            </div>
                                            <div className="ms-3">
                                                <h5>{product.title}</h5>
                                                <p className="small mb-0">{product.category}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                                <h5 className="mb-0">${product.price}</h5>
                                            </div>
                                            <div>
                                                <a href="#!" className="m-2 text-danger" onClick={()=>handleRemoveFromCart(i)}> <i className="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <p className="mb-0">You have {cartItems?.length} items in your cart</p>
                            </div>
                            <div>
                                <p className="mb-0"><span className="text-muted">Total: ${totalPrice.toFixed(2)} </span>
                                  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductTable
