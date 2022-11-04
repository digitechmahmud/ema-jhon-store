import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveItem}) => {
    const {_id, name, price, img, quantity, shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" width='50px' />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>Product Name: {name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping Charge: ${shipping}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={()=>handleRemoveItem(_id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                   
                </div>
                
            </div>
        </div>
    );
};

export default ReviewItem;