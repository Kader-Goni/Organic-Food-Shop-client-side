import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'
import '../UpdateItem/Update.css'

const AddItem = () => {
    const [user] = useAuthState(auth)

    const hendelProductAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = user?.email
        const seller = e.target.seller.value;
        const img = e.target.img.value;
        const stock = e.target.stock.value;
        const price = e.target.price.value;
        const title = e.target.title.value;
        const product = {name, seller, img, stock, price, title, email}
        console.log(product)
        
        // send data to the server
        fetch('https://blooming-plains-60014.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then (res => res.json())
        .then (data => {
            console.log('SUCCESS DATA LOAD',data)
            e.target.reset();
            toast('product added successfully')
        })
        
    }
    return (
        <div>
            <div className="top-section container my-5">
                <Link to='/myitem' className="add-item btn">
                    <h5 className='fw-bold'>My Item</h5>
                </Link>
                <Link to='/inventory' className="my-item btn">
                    <h5 className='fw-bold'>Manage Item</h5>
                </Link>
            </div>
            <div className="update-item my-5"  data-aos="zoom-in-down" data-aos-duration="800">
                <h4 className='update-header'>Add Item</h4>
                <form onSubmit={hendelProductAdd} action="">
                    <div className="form-item">
                        <input type="text" name='name' className='form-control mb-3' placeholder='Product name' required />
                        <input type="text" name='seller' className='form-control mb-3' placeholder='Supplier name' required />
                        <input type="text" name='img' className='form-control mb-3' placeholder='Upload img' required />
                        <input type="number" name='stock' className='form-control mb-3' placeholder='Quantity Stock' required />
                        <input type="number" name='price' className='form-control mb-3' placeholder='Price' required />
                        <textarea type="text" name='title' className='form-control mb-3' cols="5" rows="2" placeholder='Product description' required />
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-3 link-item">
                        <button type="submit" className='btn w-50 mx-auto cart-btn fw-bold rounded-pill'>Add item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;