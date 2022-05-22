import React from 'react';
import {FiDelete} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({product, handleProductDelete}) => {
    
    const {img, title, name, price, seller, stock} = product

    

    return (
        <div className='cart' data-aos="zoom-in-up" data-aos-duration="800">
            <div className="img1 p-3">
                <img src={img} className='img-fluid' alt="" />
            </div>
            <div className="cart-details text-start">
                <div className="text-cart">
                    <h5>{name}</h5>
                    <p>{title}</p>
                </div>
                <div className="cart-detail">
                    <div className="">
                        <h5 className='fw-bold text-primary'>{seller}</h5> 
                        <div className="fw-bold">Quantity: {stock}</div>  
                    </div>
                    <h5 className='fw-bold text-danger'>${price}</h5>
                </div>
            </div>
            <div onClick={() => handleProductDelete(product._id)} className='fs-3 delete-btn1 my-0 py-0 fw-bold'><FiDelete /></div>
            <Link to={`/update/${product._id}`} className='btn cart-btn fw-bold update-btn1 rounded-pill'>Update</Link>
        </div>
    );
};

export default Cart;