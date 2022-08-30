import React from 'react'
import "./About.css"
import selfInto from "../../images/about-me.png"

const About = () => {
    return (
        <>
            <div className="about">
                <div className="aboutHeader">
                    <h1> AboutMe </h1>
                    <h3>welcome to my self-Introduction area</h3>
                </div>
                <div className="aboutDetails">
                    <div className="DetailsLeft">
                        <h4>Hi I'm parves riyan and I'm a professional web designer and developer.
                            last 3 Year i involved with MERN Stack web design and developer related work
                            for make my self as a Stronger MERN Stack developer . So You can invent me as a MERM Stack
                            Developer & Designer , I am skilled at speaking in english fluently . I am determined at programming
                            and regular codeing, I learned programming from w3school.com , youtube , and also got  government course of LEDP .
                            I want to be a Full MERN Stack developer .
                        </h4>
                    </div>
                    <div className="DetailsRight">
                        <img src={selfInto} alt="" />
                    </div>
                </div>
                <div className="someMoreIntro">
                    <h1>Study and personalty</h1><br />
                    <ul>
                        <li>
                            I completed my SSC(Secondary School Certificate) in 2013 from Collage Of Develope Alternative (CODA)
                        </li>
                        <li>
                            I completed my HSC(Higher Secondary School Certificate) in 2016 from Gov't Bangle Collage Dhaka
                        </li>
                        <li>
                            I completed my BBS(Bachelor Business Study) in 2022 from New Model Degree Collage Dhaka
                        </li>
                        <li>
                            I just got my bachelor's degree and I am planning to continue studying for a master's immediately.
                        </li>
                        <li>
                            I am a self taught web developer and i'm learning everything from google.com, w3school.com,
                            youtube.com .
                        </li>
                        <li>
                            I really curious for learn something more at all the time.
                        </li>
                        <li>
                            i'm really very determined at programming and coding regular.
                        </li>
                        <li>
                            I am very friendly and helpful to complete clients projects and determined on it .
                        </li>
                        <li>
                            I will give my 100% best level all the time .  cause it's make me happy and satisfied .
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About
