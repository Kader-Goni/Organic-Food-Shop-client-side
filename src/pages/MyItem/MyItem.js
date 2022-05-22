import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cart from '../../components/Cart/Cart';
import auth from '../../firebase.init';
import './myItem.css'
import "../Inventory/Inventory.css"

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItem, setMyItem] = useState();

    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/myProduct?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data))
    }, [user])

    const handleProductDelete = id => {
        const prossed = window.confirm('Are YOu sure detele this user')
        if(prossed){
            console.log(id)
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = myItem.filter(p => p._id !== id)
                setMyItem(remaining);
            })
            toast("Deleted successfully");
        }
    }
        
          
    return (
        <div>
            <div className="top-section container my-5">
                <div className="all-item">
                    <h5 className='fw-bold'>Total Item: <span className='text-success'>{myItem?.length}</span></h5>
                </div>
                <Link to='/additem' className="add-item btn">
                    <h5 className='fw-bold'>Add item</h5>
                </Link>
                <Link to='/inventory' className="my-item btn">
                    <h5 className='fw-bold'>Manage Item</h5>
                </Link>
            </div>
            <div className="container products-container my-5">
                {
                    myItem?.map(p => <Cart
                    key={p._id}
                    product={p}
                    handleProductDelete={handleProductDelete}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default MyItem;