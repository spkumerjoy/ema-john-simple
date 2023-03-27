import React from "react";
import "./Product.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className="product-name">{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Starts</p>
            </div>
            <button
                className="btn-cart"
                onClick={() => handleAddToCart(props.product)}
            >
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;
