import React from 'react'
import "./Services.css"
import CircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom"

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="servicesContainer">
                    <h1>Services</h1>
                    <h2>-- WHAT SERVICES I PROVIDE --</h2>
                    <div className="serviceIntro">
                        <div className="design">
                            <h1>Web Design</h1>
                            <h2>Over 3 years Experience, I can ensure you a promising
                                web page design
                            </h2>
                        </div>
                        <div className="development">
                            <h1>Web Development</h1>
                            <h2>More then five year Experience in app development. you can stay with us
                                of 100% moneyback guarantee
                            </h2>
                        </div>
                        <div className="database">
                            <h1>Database Design</h1>
                            <h2>
                                Designed MongoDB schema and implemented data access service to
                                Create, Read, Update and Delete data (CRUD)
                            </h2>
                        </div>
                    </div>


                    <div className="pricinigSetup">
                        <div className="pricingHeader">
                            <h1>DO YOU WANT TO MAKE WEBSITE ?</h1>
                            <h2>Pricing here</h2>
                        </div>
                        <div className="pricingBox">
                            <div className="pricing">
                                <div className="pricingDetails">
                                    <h1>Silver</h1>
                                    <h4>
                                        Basic HTML CSS Bootstrap Website
                                    </h4>
                                    <p>I will design and develop - basic page responsive HTML CSS Bootstrap website having 3 to 6 sections</p>
                                    <div className="provide">
                                        <ul>
                                            <li><CircleOutlineIcon /> 1 Page</li>
                                            <li><CircleOutlineIcon /> Functional Website</li>
                                            <li><CircleOutlineIcon /> w3c validation </li>
                                            <li><CircleOutlineIcon /> Design customization</li>
                                            <li><CircleOutlineIcon /> Responsive Design</li>
                                            <li><CircleOutlineIcon /> Include source code</li>
                                            <li><CircleOutlineIcon /> Content Upload </li>
                                            <li><CircleOutlineIcon /> 5 Days Delivery </li>
                                            <li><CircleOutlineIcon /> 3 Time Revisions </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricingBtn">
                                    <Link to="/contact">
                                        <button>ORDER NOW</button>
                                    </Link>
                                    <h2>$65</h2>
                                </div>
                            </div>
                            <div className="pricing">
                                <div className="pricingDetails">
                                    <h1>Gold</h1>
                                    <h4>
                                        Standard MERN Stack website
                                    </h4>
                                    <p>I will design and develop - 3 to 5 basic pages responsive Full MERN Stack website having 3 to 5 sections each with dynamic data </p>
                                    <div className="provide">
                                        <ul>
                                            <li><CircleOutlineIcon /> 3-5 Pages</li>
                                            <li><CircleOutlineIcon /> MERN Stack Functionality</li>
                                            <li><CircleOutlineIcon /> Mongodb Database Setup </li>
                                            <li><CircleOutlineIcon /> Design customization</li>
                                            <li><CircleOutlineIcon /> Responsive Design</li>
                                            <li><CircleOutlineIcon /> Include source code</li>
                                            <li><CircleOutlineIcon /> Content Upload </li>
                                            <li><CircleOutlineIcon /> Login/Registration Functionality </li>
                                            <li><CircleOutlineIcon /> Cloudinary Setup </li>
                                            <li><CircleOutlineIcon /> Hash Password & JWT Authentication </li>
                                            <li><CircleOutlineIcon /> 10 Days Delivery </li>
                                            <li><CircleOutlineIcon /> 5 Time Revisions </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricingBtn">
                                    <Link to="/contact">
                                        <button>ORDER NOW</button>
                                    </Link>
                                    <h2>$175</h2>
                                </div>

                            </div>
                            <div className="pricing">
                                <div className="pricingDetails">
                                    <h1>platinum</h1>
                                    <h4>
                                        Complex MERN Stack website
                                    </h4>
                                    <p>I will design and develop - 5 to 10 dynamic pages responsive Full MERN Stack website having all dynamic sections each with dynamic data </p>

                                    <div className="provide">
                                        <ul>
                                            <li><CircleOutlineIcon /> Content Wise Pages</li>
                                            <li><CircleOutlineIcon />E-commerce Functional Website</li>
                                            <li><CircleOutlineIcon /> Dynamic Data Setup </li>
                                            <li><CircleOutlineIcon /> MongoDB Database Setup </li>
                                            <li><CircleOutlineIcon /> (CRUD) Functionality </li>
                                            <li><CircleOutlineIcon /> Admin Authorization </li>
                                            <li><CircleOutlineIcon /> Cloudinary Setup </li>
                                            <li><CircleOutlineIcon /> Admin Panel / Dashboard </li>
                                            <li><CircleOutlineIcon /> User Login/Registration </li>
                                            <li><CircleOutlineIcon /> Hash Password / JWT Authentication </li>
                                            <li><CircleOutlineIcon /> Profile Update </li>
                                            <li><CircleOutlineIcon /> Change Password & MailTrip Setup </li>
                                            <li><CircleOutlineIcon /> Design customization</li>
                                            <li><CircleOutlineIcon /> Responsive Design</li>
                                            <li><CircleOutlineIcon /> Include source code</li>
                                            <li><CircleOutlineIcon /> Content Upload </li>
                                            <li><CircleOutlineIcon /> 20 Days Delivery </li>
                                            <li><CircleOutlineIcon /> 7 Time Revisions </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricingBtn">
                                    <Link to="/contact">
                                        <button>ORDER NOW</button>
                                    </Link>
                                    <h2>$450</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default Services
