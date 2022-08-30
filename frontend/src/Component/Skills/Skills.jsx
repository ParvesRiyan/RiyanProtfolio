import React from 'react'
import "./Skills.css"
import { Circle } from 'rc-progress';

const Skills = () => {
    return (
        <>
            <div className="skills">
                <div className="skillsContainer">
                    <div className="skillsHeader">
                        <h1>Skills</h1>
                        <p>-- What i know and my expertise --</p>
                    </div>
                    <div className="skillsArea">
                        <div className="skillsInText">
                            <div className="expertise">
                                <h1>Expertise</h1>
                                <div className="expertiseSkills">
                                    <span>JAVASCRIPT</span>
                                    <span>ReactJS</span>
                                    <span>NODEJS</span>
                                    <span>MongoDB</span>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>SASS</span>
                                    <span>ReactBootstrap</span>
                                    <span>Express</span>
                                    <span>Jquery</span>
                                    <span>ES6</span>
                                    <span>Redux</span>
                                    <span>PSD to HTML</span>
                                    <span>PhotoShop&Figma</span>
                                </div>
                            </div>
                            <div className="confortable">
                                <h1>Comfortable</h1>
                                <div className="comfortableSkills">
                                    <span>JAVASCRIPT</span>
                                    <span>ReactJS</span>
                                    <span>NODEJS</span>
                                    <span>MongoDB</span>
                                    <span>Express</span>
                                    <span>Redux</span>
                                    <span>HTML & CSS</span>
                                </div>
                            </div>
                            <div className="familiar">
                                <h1>Familiar</h1>
                                <div className="familiarSkills">
                                    <span>JAVASCRIPT</span>
                                    <span>ReactJS</span>
                                    <span>Express</span>
                                    <span>NODEJS</span>
                                    <span>MongoDB</span>
                                    <span>HTML 5</span>
                                    <span>CSS 3</span>
                                    <span>SASS</span>
                                    <span>Tailwind CSS</span>
                                    <span>Bootstrap</span>
                                    <span>ReactBootstrap</span>
                                    <span>Jquery</span>
                                    <span>ES6</span>
                                    <span>Redux</span>
                                    <span>Wordpress</span>
                                    <span>PSD to HTML</span>
                                    <span>PhotoShop&Figma</span>
                                    <span>Cloudinary</span>
                                    <span>mailTrip</span>
                                    <span>StripeJS</span>
                                    <span>Angular</span>
                                    <span>Jquery</span>
                                </div>
                            </div>
                            <div className="tools">
                                <h1>Tools</h1>
                                <div className="toolsSkills">
                                    <span>Sketch</span>
                                    <span>VScode</span>
                                    <span>GIT</span>
                                    <span>GIT Bash</span>
                                    <span>Npm & Npx</span>
                                    <span>create-react-app</span>
                                    <span>Bable</span>
                                    <span>Webpack</span>
                                    <span>Firebase</span>
                                    <span>Postman</span>
                                    <span>Heroku</span>
                                    <span>Netlify</span>
                                    <span>chrome DevTools</span>
                                    <span>Redux toolkit</span>
                                    <span>Redux Devtools</span>
                                    <span>Window Resizer</span>
                                    <span>Firefox</span>
                                    <span>MongoDB compass</span>
                                    <span>Adove PhotoShop</span>
                                    <span>Figma</span>
                                    <span>RapidAPI</span>
                                    <span>React Developer Tool</span>
                                </div>
                            </div>
                        </div>
                        <div className="skillsInProgressbar">

                            <div className="left">
                                <div className="progressWithTag">
                                    <h3>javascript: 80%</h3>
                                    <Circle
                                        percent={80}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='js'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>React: 70%</h3>
                                    <Circle
                                        percent={70}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='react'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>NodeJS: 60%</h3>
                                    <Circle
                                        percent={60}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='njs'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>MongoDB: 70%</h3>
                                    <Circle
                                        percent={70}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='MDB'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>HTML: 99%</h3>
                                    <Circle
                                        percent={99}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='html'
                                    />
                                </div>
                            </div>
                            <div className="right">

                                <div className="progressWithTag">
                                    <h3>CSS: 75%</h3>
                                    <Circle
                                        percent={75}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='css'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>ReactBootstrap: 60%</h3>
                                    <Circle
                                        percent={60}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='RB'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>Redux: 75%</h3>
                                    <Circle
                                        percent={75}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='RR'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>sass: 70%</h3>
                                    <Circle
                                        percent={70}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='sass'
                                    />
                                </div>
                                <div className="progressWithTag">
                                    <h3>Photoshop&Figma: 70%</h3>
                                    <Circle
                                        percent={70}
                                        strokeWidth={7}
                                        trailWidth={5}
                                        strokeColor="#006aff"
                                        className='PF'
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
