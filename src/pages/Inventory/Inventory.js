import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cart from '../../components/Cart/Cart';
import Loading from '../../components/Loding/Loding';
import useProducts from '../../hooks/useProducts';
import './Inventory.css'

const Inventory = () => {
    const [products, setProduct, loading] = useProducts()

    const handleProductDelete = id => {
        const prossed = window.confirm('Are you sure delete this user')
        if(prossed){
            console.log(id)
            const url = `https://blooming-plains-60014.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(p => p._id !== id)
                setProduct(remaining);
            })
            toast("Deleted successfully");
        }
    }
    if(loading === true){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="top-section container my-5">
                <div className="all-item">
                    <h5 className='fw-bold'>Total Item: <span className='text-success'>{products?.length}</span></h5>
                </div>
                <Link to='/additem' className="add-item btn">
                    <h5 className='fw-bold'>Add item</h5>
                </Link>
                <Link to='/myitem' className="my-item btn">
                    <h5 className='fw-bold'>My Item</h5>
                </Link>
            </div>
            <div className="my-5">
                <div className="container products-container">
                    {
                        products.map(p => <Cart 
                         key={p.id}
                         product={p}
                         handleProductDelete={handleProductDelete}
                        ></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;