import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loding/Loding';
import './Update.css'

const UpdaeteItem = ({updateProduct}) => {
    // const {img, name, price, title, seller, stock} = updateProduct

    const {id} = useParams()
    const [product, setProdcut] = useState({})
    const [loading, setLooding] = useState(true)
    let quantity = parseInt(product?.stock)
    useEffect(() => {
        setQuantity(quantity)
    }, [product]);
 
    const [stockQuantity, setQuantity] = useState(quantity)
    console.log(quantity)
    const {img, name, price, title, seller} = product;
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data){
                setProdcut(data)
                setLooding(false)
            }
        })
    }, [])

    
    if(loading === true){
        return <Loading></Loading>
    }

    const handleUpDateProduct= (e) => {
        e.preventDefault();
        const stockInput = parseInt(e.target.stockInput.value);
        console.log(stockInput)
        let stock = parseInt(stockQuantity + stockInput);
        console.log(stock)
        
        // send data to the server
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stock})
        })
        .then (res => res.json())
        .then (data => {
            console.log('SUCCESS DATA LOADE',data)
            e.target.reset();
        })
        setQuantity(stock);
    }
    // delivered update value quantity
    const handleDelivered = () => {
        let stock = 1 
        if(stockQuantity > 1){
            stock = stockQuantity -1
        }else{
            stock = 1
        }
        // send data to the server
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stock})
        })
        .then (res => res.json())
        .then (data => {
            console.log('SUCCESS DATA LOADE',data)
        })
        setQuantity(stock);
    }
    return (
        <div className='my-5 container'>
            <div className="top-section container my-5">
                <Link to='/myitem' className="my-item btn">
                    <h5 className='fw-bold'>My Item</h5>
                </Link>
                <Link to='/additem' className="add-item btn">
                    <h5 className='fw-bold'>Add item</h5>
                </Link>
                <Link to='/inventory' className="my-item btn">
                    <h5 className='fw-bold'>Manage Item</h5>
                </Link>
            </div>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6">
                    <div className='update-cart' data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="cart-img p-3">
                            <img src={img} className='img-fluid' alt="" />
                        </div>
                        <div className="text-start p-3">
                            <h5>{name}</h5>
                            <p>{title}</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='fw-bold text-primary'>{seller}</h5> 
                                <div className="quantity btn fw-bold">{stockQuantity}</div>  
                                {/* <div className="d-flex align-items-center justify-content-center border rounded-pill">
                                    <span className='cursor p-2 mx-1 fw-bold'>-</span>
                                    <span className='cursor p-2 mx-1 fw-bold'>1</span>
                                    <span className='cursor p-2 mx-1 fw-bold'>+</span>
                                </div> */}
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4">
                                <h5 className='fw-bold text-danger'>${price}</h5>
                                <button onClick={handleDelivered} className='btn cart-btn fw-bold rounded-pill'>delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="update-item" data-aos="zoom-in-left" data-aos-duration="800">
                        <h4 className='update-header'>Update Quantity and Link</h4>
                        <form onSubmit={handleUpDateProduct} action="" className='form-item'>
                            <div className="update-quantity">
                                <input type="number" name='stockInput' className='quantity-input' placeholder='Quantity' required />
                                <input className='quantity-btn btn btn-danger' type="submit" value="Add Quantity" />
                            </div>
                        </form>
                        <div className="rounded-pill border border-primary bg-primary bg-opacity-10 text-primary fw-bold w-25 mx-3 py-2 px-4">{stockQuantity}</div>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <Link to='/additem' className='btn cart-btn fw-bold rounded-pill'>Add Item</Link>
                            <Link to='/myitem' className='btn cart-btn fw-bold rounded-pill'>My Item</Link>
                            <Link to='/inventory' className='btn cart-btn fw-bold rounded-pill'>Manage Item</Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-3 link-item">
                         <button onClick={handleDelivered} className='btn w-50 mx-auto cart-btn fw-bold rounded-pill'>delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdaeteItem;