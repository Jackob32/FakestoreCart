const ProductTable = () => {

    return (
        <section>
            <div className="container py-5">
                <h2>Products</h2>
                <div className="row">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <h5>Title</h5>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3">
                                <div className="d-flex flex-column mt-4">
                                    <button className="btn btn-sm mt-2" type="button"
                                            onClick={() => console.log("Add")}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <h5>Title</h5>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3">
                                <div className="d-flex flex-column mt-4">
                                    <button className="btn btn-sm mt-2" type="button"
                                            onClick={() => console.log("Add")}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductTable
