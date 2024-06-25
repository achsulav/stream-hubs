import { ProductList } from "../components/ProductList"

export const Home = () => {
    return <div className="col-12">
        <main className="row">

            <div className="col-12 px-0">
                <div id="slider" className="carousel slide w-100" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#slider" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#slider" data-bs-slide-to="1"></li>
                        <li data-bs-target="#slider" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="slider-1.jpg" className="slider-img" />
                        </div>
                        <div className="carousel-item">
                            <img src="slider-2.jpg" className="slider-img" />
                        </div>
                        <div className="carousel-item">
                            <img src="slider-3.jpg" className="slider-img" />
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
             
            

            <ProductList title="Featured Products" uri="product/featured" />

            <div className="col-12">
                <hr />
            </div>

            <ProductList title="Latest Products" uri="product/latest" />

            <div className="col-12">
                <hr />
            </div>

            <ProductList title="Top Selling Products" uri="product/top-selling" />

           
        </main>
    </div>
}