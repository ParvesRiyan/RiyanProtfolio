import React from 'react'
import "./Home.css"
import profile from "../../images/profile2.png"
import { Link } from 'react-router-dom'
import ResCarousel from './Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='homeContainer'>
                    <div className='homeHeader'>
                        <div className='homeHeaderLeft'>
                            <div className='headerText'>
                                <h3>Hi I'm</h3>
                                <h1>PARVES RIYAN</h1>
                                <h5>MERN full stack developer</h5>
                            </div>
                            <p>
                                Over 4 years of strong experience as full Stack Web Developer with solid understanding<br />
                                of front-end technologies, Restful web services and Data Base designing as a back-end warrior .
                            </p>

                            <div className='headerButton'>
                                <Link to="/about"> {/* create ac cv and upload in drive and link with this */}
                                    <button>Download CV</button>
                                </Link>
                                <Link to="/contact">
                                    <button>ContactMe</button>
                                </Link>
                            </div>

                        </div>
                        <div className='homeHeaderRight'>
                            <img src={profile} alt='' />
                        </div>
                    </div>
                    <div className='TagBox'>
                        <div className='tagFast'>
                            <h5>3 years freelancing</h5>
                            <p>Experience</p>
                        </div>
                        <div className='tagSecond'>
                            <h5>15 + Projects</h5>
                            <p>Complected</p>
                        </div>
                        <div className='tagLast'>
                            <h5>Support</h5>
                            <p>Online 24/7</p>
                        </div>
                    </div>
                    <div className='timeline'>
                        <div className='timelineContainer'>
                            <div className='timelineHeader'>
                                <h2>What I Do</h2>
                                <p>Introducing my self as a self learner on MERN Stack</p>
                            </div>
                            <ResCarousel />
                        </div>
                    </div>
                    <div className="facts">
                        <h1>FACTS</h1>
                        <h3>Already a lots of projects i have done . Here some records of my works are shown</h3>
                        <div className="numberOfWorks">
                            <div className="portfolio">
                                <h1>5+</h1>
                                <h3>Portfolio</h3>
                            </div>
                            <div className="eCommerce">
                                <h1>6+</h1>
                                <h3>E-Commerce</h3>
                            </div>
                            <div className="management">
                                <h1>10+</h1>
                                <h3>Inventory</h3>
                            </div>
                            <div className="social">
                                <h1>2</h1>
                                <h3>Social Media</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;