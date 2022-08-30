import React from 'react'
import "./Project.css"
import { Carousel } from 'react-responsive-carousel'
import p1 from "../../projectImage/p1.png"
import p2 from "../../projectImage/p2.png"
import p3 from "../../projectImage/p3.png"
import p4 from "../../projectImage/p4.png"
import p5 from "../../projectImage/p5.png"
import p6 from "../../projectImage/p6.png"
import r1 from "../../projectImage/r1.jpg"
import r2 from "../../projectImage/r2.jpg"
import r3 from "../../projectImage/r3.jpg"
import pr1 from "../../projectImage/pr1.jpg"
import pr2 from "../../projectImage/pr2.jpg"
import pr3 from "../../projectImage/pr3.jpg"
import pr4 from "../../projectImage/pr4.jpg"
import pr5 from "../../projectImage/pr5.jpg"

const Project = () => {
  return (
    <>
      <div className="projectPage">
        <div className="projectHeader">
          <h1>Projects</h1>
          <h4>--  Here some records of my projects are shown --</h4>
        </div>
        <div className="projectThumb">
          <div className="complexProject">
            <div className="projectBox">
              <div className="left">
                <h3><span>Type</span>: E-commerce</h3>
                <h5>
                  <span>About</span>: This is an E-commerce with all of e-commerce Functionality
                  with all dynamic data , online database access, cloudinary for uploading photo,
                  mailtrip for send token link to email for change tha password ,  and also has dashboard with admin
                  authorization for updata user, upload product and many more .
                  <br/><mark>Everything is working Parfectly.. </mark>
                </h5>
                <h5><span>CreatedBy</span>: Parves Riyan</h5>
                <h5><span>Tools&Technology</span> This site is Full MERN Stack Functionality</h5>
                <a href="http://aestheticwatchillusion.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
              </div>
              <div className="right">
                <Carousel
                  autoPlay={true}
                  centerMode={true}
                  showThumbs={false}
                  showArrows={true}
                  swipeable={true}
                  showStatus={false}
                  useKeyboardArrows={true}
                >
                  <div className='projectSlide'>
                    <img src={p1} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={p2} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={p3} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={p4} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={p5} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={p6} alt="mernStack" />
                  </div>
                </Carousel>

              </div>
            </div>
            <div className="projectBox">
              <div className="left">
                <h3><span>Type</span>: User Authentication Protfolio</h3>
                <h5>
                  <span>About</span>: This is an User Login/Registration  Authentication Protfolio ,
                   this project is full Mern stack website , and also user authenticated about page active.
                    <br/><mark>Database will work soon</mark>
                </h5>
                <h5><span>CreatedBy</span>: Parves Riyan</h5>
                <h5><span>Tools&Technology</span> This site is Full MERN Stack Functionality</h5>
                <a href="https://parvesriyan.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
              </div>
              <div className="right">
                <Carousel
                  autoPlay={true}
                  centerMode={true}
                  showThumbs={false}
                  showArrows={true}
                  swipeable={true}
                  showStatus={false}
                  useKeyboardArrows={true}
                >
                  <div className='projectSlide'>
                    <img src={pr5} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={pr2} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={pr3} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={pr4} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={pr1} alt="mernStack" />
                  </div>
                </Carousel>

              </div>
            </div>
            <div className="projectBox">
              <div className="left">
                <h3><span>Type</span>: Resturent menu</h3>
                <h5>
                  <span>About</span>: This is just manu which one shown the menu by database wise 
                  and this is for make sure to work with dynamic data .
                  <br/><mark>Responsiveness will add soon</mark>
                </h5>
                <h5><span>CreatedBy</span>: Parves Riyan</h5>
                <h5><span>Tools&Technology</span> This site is Full MERN Stack Functionality</h5>
                <a href="https://parvesriyan.github.io/reactwebapp/" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
              </div>
              <div className="right">
                <Carousel
                  autoPlay={true}
                  centerMode={true}
                  showThumbs={false}
                  showArrows={true}
                  swipeable={true}
                  showStatus={false}
                  useKeyboardArrows={true}
                >
                  <div className='projectSlide'>
                    <img src={r1} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={r2} alt="mernStack" />
                  </div>
                  <div className='projectSlide'>
                    <img src={r3} alt="mernStack" />
                  </div>
                </Carousel>

              </div>
            </div>
            

            <div className="letest">
                <h1><mark>Some Update are coming soon....</mark></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project