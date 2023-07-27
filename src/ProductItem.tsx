import {Product} from "./types";

const ProductItem = ({
                         item,
                         handleAddToCart
                     }: { item: Product, handleAddToCart: (product: Product) => void }) => {
    const renderStars = (rate: number) => {
        const fullStars = Math.floor(rate);
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fa fa-star"></i>);
        }
        return stars;
    };
    return <div className="row justify-content-center mb-3" key={item.id}>
        <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                <img
                                    src={item.image}
                                    className="w-100"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>{item.title}</h5>
                            <div className="d-flex flex-row">
                                <div className="text-danger mb-1 me-2">
                                    {renderStars(item.rating.rate)}
                                </div>
                                <span>{item.rating.count}</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                                <span>{item.category}</span>
                            </div>
                            <p className="mb-4 mb-md-0">
                                {item.description}
                            </p>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">${item.price}</h4>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <button className="btn btn-outline-primary btn-sm mt-2"
                                        type="button" onClick={() => handleAddToCart(item)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default ProductItem
