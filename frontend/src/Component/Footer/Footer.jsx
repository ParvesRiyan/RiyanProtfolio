import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div className="Footer">
                <div className="footerContainer">
                    <div className="footerContact">

                        <div className="address">
                            <BusinessIcon /><br/>
                            HouseNo:61/a shuktara house <br/>
                            Durgamondir goli, Sherebangla Road, <br/>
                            Dhaka Bangladesh 1207 .
                        </div>
                        <div className="gmail">
                            <GoogleIcon /><h4>parvesriyan@gmail.com</h4>
                        </div>
                        <div className="phnNumber">
                            <LocalPhoneIcon/><h4>+8801938715047</h4>
                        </div>
                        
                    </div>
                    <div className="logoSection">
                        <h4>Find me in Social Media</h4>
                        <a href="https://www.facebook.com/parvezray.riyan/" target="blank">
                            <FacebookIcon
                                color="primary"
                                fontSize="large"
                                className='logo'
                            />
                        </a>
                        <a href="https://www.instagram.com/parves_riyan/" target="blank">
                            <InstagramIcon
                                color="primary"
                                fontSize="large"
                                className='logo'
                            />
                        </a>
                        <a href="https://github.com/ParvesRiyan" target="blank">
                            <GitHubIcon
                                color="primary"
                                fontSize="large"
                                className='logo'
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/parves-riyan-8a66b4123/" target="blank">
                            <LinkedInIcon
                                color="primary"
                                fontSize="large"
                                className='logo'
                            />
                        </a>
                        <a href="https://www.facebook.com/parvezray.riyan/" target="blank">
                            <TwitterIcon
                                color="primary"
                                fontSize="large"
                                className='logo'
                            />
                        </a>
                        <a href="https://www.youtube.com/channel/UCORIKDP_I4eWQoY1GMfNuMg/videos" target="blank">
                            <YouTubeIcon
                                color="primary"
                                fontSize="large"
                                className='logo'
                            />
                        </a>
                    </div>
                    <div className="navSection">
                        <Link to="/about"><button>Introduction</button></Link>
                        <Link to="/skills"><button>Skills</button></Link>
                        <Link to="/services"><button>Services</button></Link>
                        <Link to="/project"><button>Projects</button></Link>
                        <Link to="/contact"><button>ContactMe</button></Link>
                    </div>
                    <div className="copyrightSection">
                        <h3>
                          Created by  on 16/08/22.<br />
                          Copyright © 2022 . All rights reserved By Parves Riyan<br/>
                        </h3>
                        <h3>
                           This website Designed By - Parves Riyan
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
