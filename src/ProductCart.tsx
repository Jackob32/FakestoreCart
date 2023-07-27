import {Product} from "./types";

const ProductTable = ({cartItems, handleRemoveFromCart}: { cartItems: Product[], handleRemoveFromCart:  (id: number) => void }) => {
    return (
        <section>
            <div className="container py-5">
                <h2>Cart</h2>
                <div className="row">
                    <div className="col-lg-7">
                        {cartItems.map((product,i) => (
                            <div className="card mb-3" key={i}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                                <img
                                                    src={product.image}
                                                    className="img-fluid rounded-3 w-50" alt="Product item"/>
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
                                            <a href="#"><i className="fas fa-trash-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductTable
