import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Product Summery Section</h4>
            <p>Selected: {cart.length}</p>
        </div>
    );
};

export default Cart;