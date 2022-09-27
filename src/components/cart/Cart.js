import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p><b>Selected items:</b>{quantity}</p>
            <p><b>Total price:</b>${total}</p>
            <p><b>Total shipping:</b>${shipping}</p>
            <p><b>Tax:</b>${tax}</p>
            <h5>Grand total:{grandTotal}</h5>
        </div>
    );
}

export default Cart;