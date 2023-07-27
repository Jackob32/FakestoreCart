import {Product} from "./types";

const ProductCartItem = ({
                             item,
                             handleRemoveFromCart,
                             i
                         }: { item: Product, handleRemoveFromCart: (id: number) => void, i: number }) => {
    return (
        <div className="card mb-3" key={i}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={item.image}
                                className="img-fluid rounded-3 w-25" alt="Product item"/>
                        </div>
                        <div className="ms-3">
                            <h5>{item.title}</h5>
                            <p className="small mb-0">{item.category}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <div>
                            <a href="#" className="m-2 text-danger" onClick={() => handleRemoveFromCart(i)}> <i
                                className="fa fa-trash-o"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductCartItem
