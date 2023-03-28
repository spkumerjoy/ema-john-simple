import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
