import React from 'react';
import dineshImg from '../images/dinesh.png';
import resume from '../images/resume/CV-DINESH_C.pdf';


const Banner = () => (
  <div>
<section id="banner_dinesh" className="banner_dinesh"> 
      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="intro">
                    <h1>Hi, I'm Dinesh Chithrakannan</h1>
                    <h2>Web Developer</h2>
                    <p>A passionate Web Developer having an experience of building Web Application and Websites with user friendly...</p>
                    <div className="resume">
                        <a href={resume}>Download Resume</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="image">
                 <img src={dineshImg} alt="Dinesh"/>
                </div>
           </div>
        </div>
      </div>
    </section>
  </div>
);


export default Banner;
