import React from 'react';
import NotFound from '../../images/NotFound.jpg'

const Notfound = () => {
    return (
        <div className='text-danger mt-5'>
            <div className="w-50 mx-auto bg-danger bg-opacity-25 rounded-3 p-3">
                <h1>Opps... Page NOT FOUND...</h1>
                <h1>404 errors...</h1>
            </div>
            <div className="p-5 margin-top" data-aos="zoom-in-up" data-aos-duration="800">
                <img src={NotFound} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default Notfound;