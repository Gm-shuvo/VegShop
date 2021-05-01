import { Image } from "react-bootstrap"
import './ProductsCard.css'
const ProductCard = ({verticalView}) => {
    return (
        <div className='rowProductsContainer' >
            <div className={verticalView ? 'productCardContainer':'productCardContainerHori'}>


                <div className="productCardImg">
                    <a href="#" className='profeatureImage'>
                        <Image src={'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80'} fluid></Image>
                        <div className="placeHolderBackgroundAimation" />

                        <div className="hiddenScndImage">
                            <div className="productCardImg">
                                <div className="placeHolderBackgroundAimation" />
                            </div>
                        </div>

                    </a>
                </div>
                <div className="productDetailContainer">

                    <div className="productType">
                        <a href="" className="categroyLink">
                            Vegitables
                               </a>
                    </div>
                        <h5 className="productName">
                           <a href="#"> Pineapple</a>
                        </h5>
                        <div className="proGroup">
                            <h2>$10.00</h2>
                        </div>
                    <div className="productReviews">
                        <span className="starReviewContainer">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </span>
                        <span className='numberReviews'>(2)</span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductCard
