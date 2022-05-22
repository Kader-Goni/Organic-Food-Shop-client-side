import React from 'react';
import './blog.css'
import {GiCheckMark} from 'react-icons/gi'

const Blog = () => {
    return (
        <div className='container my-5'>
            <h2 className='my-5 text-primary'>Question and Answer</h2>
            <div className="answer text-start">
                <div className="ans" data-aos="zoom-in-right" data-aos-duration="800">
                    <h6 className='text-success fw-bold'>When should you use nodejs and when should you use mongodb</h6>
                    <div className="my-3">
                        <p> <span className='fw-bold'>When we use Nodejs:</span> NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                        <br /> <span className='fw-bold'>When we use MongoDB:</span> But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data. 
                        </p>
                    </div>
                </div>
                <div className="ans" data-aos="zoom-in-left" data-aos-duration="800">
                    <h6 className='text-success fw-bold'>What is the purpose of jwt and how does it work..?</h6>
                    <div className="my-3">
                        <p>JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                        <br /> <span className='fw-bold'>It work</span> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.   
                        </p>
                    </div>
                </div>
            </div>
            <div className="row text-start mx-1 ans my-5" data-aos="zoom-in-up" data-aos-duration="1000">
                <h6 className='text-success fw-bold'>Difference between javascript and nodejs..?</h6>
                <div className="col-md-6">
                    <div className="">
                    <p className='text-center fw-bold'>Javascript</p>
                    <p><GiCheckMark className='text-success' /> Javascript is a programming language that is used for writing scripts on the website.</p>
                    <p><GiCheckMark className='text-success' /> It is basically used on the client-side.</p>
                    <p><GiCheckMark className='text-success' /> Javascript is used in frontend development.</p>
                    <p><GiCheckMark className='text-success' /> Javascript can only be run in the browsers.</p>
                    </div>
                </div>
                <div className="col-md-6 border-start border-3">
                    <div className="">
                    <p className='text-center fw-bold'>Node Js</p>
                    <p><GiCheckMark className='text-success' /> NodeJS is a Javascript runtime environment.</p>
                    <p><GiCheckMark className='text-success' /> It is mostly used on the server-side.</p>
                    <p><GiCheckMark className='text-success' /> Nodejs is used in server-side development.</p>
                    <p><GiCheckMark className='text-success' /> We can run Javascript outside the browser with the help of NodeJS.</p>
                    </div>
                </div>
            </div>
            <div className="row text-start mx-1 ans my-5" data-aos="zoom-in-up" data-aos-duration="1000">
                <h6 className='text-success fw-bold'>Differences between SQL  and NoSQL  databases...?</h6>
                <div className="col-md-6">
                    <div className="">
                    <p className='text-center fw-bold'>SQL</p>
                    <p><GiCheckMark className='text-success' /> SQL databases are relational.</p>
                    <p><GiCheckMark className='text-success' /> SQL databases are table-based.</p>
                    <p><GiCheckMark className='text-success' /> SQL databases use structured query language and have a predefined schema.</p>
                    <p><GiCheckMark className='text-success' /> SQL databases are vertically scalable.</p>
                    </div>
                </div>
                <div className="col-md-6 border-start border-3">
                    <div className="">
                    <p className='text-center fw-bold'>NoSQL</p>
                    <p><GiCheckMark className='text-success' /> NoSQL databases are non-relational.</p>
                    <p><GiCheckMark className='text-success' /> NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p><GiCheckMark className='text-success' /> NoSQL databases have dynamic schemas for unstructured data.</p>
                    <p><GiCheckMark className='text-success' /> NoSQL databases are horizontally scalable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;