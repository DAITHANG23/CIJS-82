import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProductItem.css";
import { FaCartPlus } from "react-icons/fa";
import AppContext from '../../contexts/AppContext';

const ProductItem = (props) => {
    const{ productImage, productName, productId, productPrice } = props;

    const { onAddToCart } = useContext(AppContext);
    const navigate = useNavigate();
    
    const onNavigateToProductDetail = () => {
        const to = `/products/${productId}`;
        navigate(to);
    };
    return (
        <div className="col-6 col-md-4 col-lg-3 mb-4 product ">
            <div className="card" style={{
                height: "400px",
                width: "300px",
                
            }}>
                <div className="card-img" style={{
                    height:"50%"
                }}>
                    <img
                        src={productImage}
                        className="card-img-top p-3"
                        alt={productName}
                        style={{
                            height:"100%"
                        }}
                    />
                </div>
                <div className="card-body" style={{
                    paddingTop:"40px"
                }}>
                    <h5 className="card-title">{productName}</h5>
                    <div className="card-information d-flex items-center justify-content-between">
                        <span className=" text-primary">$ {productPrice}</span>
                        <button
                            className="btn btn-primary"
                            onClick={() => onAddToCart(productId)}
                        >
                            <FaCartPlus />
                        </button>
                    </div>
                    <button
                        className="btn btn-info mt-3 w-100"
                        onClick={onNavigateToProductDetail}
                    >
                        View details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem