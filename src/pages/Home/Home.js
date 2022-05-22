import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaHandsHelping} from 'react-icons/fa'
import {GrDeliver} from 'react-icons/gr'
import {GiCardDiscard} from 'react-icons/gi'
import {BsEmojiSmile} from 'react-icons/bs'
import {Ri24HoursFill} from 'react-icons/ri'
import useProducts from '../../hooks/useProducts';
import banner1 from '../../images/banner11.jpg'
import banner2 from '../../images/banner1 (1).jpg'
import banner3 from '../../images/banner1 (2).jpg'
import support from '../../images/support.png'
import './Home.css'
import Loading from '../../components/Loding/Loding';
import { Carousel } from 'react-bootstrap';

const Home = ({handleUpdate}) => {
    const [products, setProduct, loading] = useProducts()
    const [index, setIndex] = useState(0);

    // console.log(products.length)

    if(loading === true){
        return <Loading></Loading>
    } 

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='position-relative banner'>
                <img
                className="d-block w-100 banner-img"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption className='overly'>
                    <div className="description-title">
                        <h1 className='fw-bold display-5'>Organic Online Food Shop</h1>
                        <h5 className='fw-bold'>You might also like to checkout our highly popular Items</h5>
                        <button className='btn fs-6 cart-btn fw-bold rounded-pill'>Register Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='position-relative banner'>
                <img
                className="d-block w-100 banner-img"
                src={banner2}
                alt="First slide"
                />
                <Carousel.Caption className='overly'>
                    <div className="description-title">
                        <h1 className='fw-bold display-5'>Fresh Product Shopping</h1>
                        <h5 className='fw-bold'>You might also like to checkout our highly popular Items</h5>
                        <button className='btn fs-6 cart-btn fw-bold rounded-pill'>Register Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className='position-relative banner'>
                <img
                className="d-block w-100 banner-img"
                src={banner3}
                alt="First slide"
                />
                <Carousel.Caption className='overly'>
                    <div className="description-title">
                        <h1 className='fw-bold display-5'>Supper Food Shop</h1>
                        <h5 className='fw-bold my-3'>You might also like to checkout our highly popular Items</h5>
                        <button className='btn fs-6 cart-btn fw-bold rounded-pill'>Register Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
      
        </Carousel>

            <div className="inventory my-5">
                <h3 className='fw-bold text-primary my-4'>Our Food Items</h3>
                <div className="container inventory-container">
                    {
                        products.slice(0, 6).map(p => <div className='update-cart'  data-aos="zoom-in-up" data-aos-duration="800">
                            <div className="cart-img p-3">
                                <img src={p.img} className='img-fluid' alt="" />
                            </div>
                            <div className="text-start p-3">
                                <h5>{p.name}</h5>
                                <p>{p.title}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className='fw-bold text-primary'>Seller: {p.seller}</h5> 
                                    <div className="quantity btn fw-bold">{p.stock}</div> 
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <h5 className='fw-bold text-danger'>${p.price}</h5>
                                    <Link onClick={() => handleUpdate(p)} to={`/update/${p._id}`} className='btn cart-btn fw-bold rounded-pill'>Update</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link className='btn btn-primary fw-bold mt-5' to='/inventory'>Manage Inventory</Link>
            </div>


            <div className="newCollection py-5 my-5">
                <h2 className='mb-4 text-primary'>Our Special Service</h2>
                <div className="container provide-container">
                <div data-aos="zoom-in-left" 
                        data-aos-duration="1000"
                        className="provider text-start">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img-provider">
                                <div className='display-5 fw-bold'><GiCardDiscard /></div>
                            </div>
                            <div className="fw-bold me-auto">
                                <h4>Supper Discount</h4>
                                <p className='text-muted mb-0'>best service</p>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>Daily Discount that organized collection system</p>
                            <Link className='text-decoration-none fw-bold' to='/'>VIEW MORE</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-down" 
                        data-aos-duration="800"
                        className="provider text-start">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img-provider">
                                <div className='display-5 fw-bold'><GrDeliver /></div>
                            </div>
                            <div className="fw-bold me-auto">
                                <h4>Free Delivery</h4>
                                <p className='text-muted mb-0'>best service</p>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>Free delivery organized collection system</p>
                            <Link className='text-decoration-none fw-bold' to='/'>VIEW MORE</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-right" 
                        data-aos-duration="500"
                        className="provider text-start">
                        <div className="d-flex align-items-center justify-content-center  mb-3">
                            <div className="img-provider">
                                <div className='display-5 fw-bold'><FaHandsHelping /></div>
                            </div>
                            <div className="fw-bold me-auto">
                                <h4>Easy Returns</h4>
                                <p className='text-muted mb-0'>best service</p>
                            </div>
                        </div>
                        <div className="pt-3 border-top border-2">
                            <p>Knowledge base that organized collection system</p>
                            <Link className='text-decoration-none fw-bold' to='/'>VIEW MORE</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="online-support py-5">
                <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <div className="img" data-aos="zoom-in-right" data-aos-duration="800">
                            <img src={support} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-start"  data-aos="zoom-in-left" data-aos-duration="800">
                            <div className="">
                                <h1>Our Online Support</h1>
                                <p>We listen without judgement and provide a safe space to discuss your needs, worries or concerns. We will work with you to explore options for support.</p>
                            </div>
                            <div className="d-flex emo">
                                <div className="border-end border-2 pe-2">
                                    <p className='text-muted'>AROUND THE CLOCK SUPPORT</p>
                                    <div className="text-success d-flex"><BsEmojiSmile className='display-4' /> <h1 className='text-secondary ms-3'>98.9%</h1></div>
                                </div>
                                <div className="px-2 emo">
                                    <p className='text-muted'>CUSTOMER HAPPINESS RATING</p>
                                    <div className="d-flex text-success"><Ri24HoursFill className='display-4' /> <h1 className='text-secondary ms-3'>24/7</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;