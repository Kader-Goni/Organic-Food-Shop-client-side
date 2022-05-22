import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container py-4'>
            <footer className='container footer text-light my-4'>
                <div className="text-start footer-item" data-aos="zoom-in-right" data-aos-duration="500">
                    <h4>ABOUT US</h4>
                    <p>This demo title description title in this section</p>
                    <p>All about Organic Food Shop</p>
                    
                </div>
                <div className="text-start footer-item" data-aos="zoom-in-up" data-aos-duration="800">
                    <h4>CONTACT US</h4>
                    <p>This demo title description title in this section</p>
                    <h6>+880-17000-000000</h6>
                    <h6>info@organicfoodshop</h6>
                    <h6>4425- Block-A, California, USA</h6>
                </div>
                <div className="text-start footer-item" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h4>Quick Contact</h4>
                    <input type="email" name="" className='form-control mb-3 bg-input' placeholder='Enter your email' id="" required/>
                    <input type="submit" className='btn btn-success' value="Submit" />
                </div>
            </footer>
            <p className="text-muted text-center">All Right reserved &copy;2022 Organic Food Shop.</p>
        </div>
    );
};

export default Footer;