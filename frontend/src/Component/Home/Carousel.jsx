import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "./Carousel.css"
import mernstact from "../../images/mernstack.png"
import reactRedux from "../../images/react-redux.png"
import JsJq from "../../images/JsJq.png"
import ReactB from "../../images/ReactB.png"
import photoFigma from "../../images/photoFigma.png"
import mongodb from "../../images/mongodb.png"


const ResCarousel = () => {
    return (
        <>
            <Carousel
                autoPlay={true}
                centerMode={true}
                showThumbs={false}
                showArrows={true}
                swipeable={true}
                showStatus={false}
                useKeyboardArrows={true}
            >
                <div className='slide'>
                    <img src={mernstact} alt="mernStack" />
                    <h2>MERN Stack</h2>
                    <h5>
                        " Strong knowledge in <span>MERN Stack</span> with vast exprience in building Web Applications
                        used <span>React.js</span> for client side <span>Node.js/Express</span> for server side and <span>MongoDB</span> for database "
                    </h5>
                </div>
                <div className='slide'>
                    <img src={reactRedux} alt="reactRedux" />
                    <h2>React.js / Redux</h2>
                    <h5>
                        " Expertise in using React.js/Redux to build User interface, strong knowledge of
                        <span>state store, middleware, action creator, reducer and container</span>
                        "
                    </h5>
                </div>
                <div className='slide'>
                    <img src={JsJq} alt="JsJq" />
                    <h2>JavaScript / jQuery / SASS</h2>
                    <h5>
                        " Used <span> JavaScript AND jQuery</span> to build interactive User interface <span>(UI)</span>,
                        for User Friendly and for make more easy functionality and also for logic building <span>Develop the code usign SASS</span> framework
                        which in turn would generate plain css for the dynamic pages "
                    </h5>
                </div>
                <div className='slide'>
                    <img src={ReactB} alt="ReactB" />
                    <h2>HTML / CSS / ReactBootstrap</h2>
                    <h5>
                        " Used <span>HTML5, CSS3, JavaScript AND jQuery</span> to build interactive User interface <span>(UI)</span>,
                        created responsive web pages using <span>React Bootstrap framework</span> and <span>Animation & Transition </span>
                        many more for attractive more  "
                    </h5>
                </div>
                <div className='slide'>
                    <img src={photoFigma} alt="photoFigma" />
                    <h2> PhotoShop / Figma</h2>
                    <h5>
                        " Used <span>Photoshop(ps) & Figma</span> for <span>Designed</span> the user interface (UI)
                        and <span>Develop</span> infoPath from templates
                        "
                    </h5>
                </div>
                <div className='slide'>
                    <img src={mongodb} alt="mongodb" />
                    <h2> MongoDB</h2>
                    <h5>
                        "
                        Designed MongoDB schema and implemented data access service to
                        <span>Create, Read, Update and Delete data ( CRUD )</span>

                        "
                    </h5>
                </div>

            </Carousel>
        </>
    )
}


export default ResCarousel
