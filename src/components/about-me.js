import React from 'react';
import uiDeveloper from '../images/ui_developer.png';
import Experience from '../images/experience.png';
import Graduate from '../images/graduate.png';

const AboutMe = () => (
  <div>
      <section id="about_dinesh" className="about_dinesh"> 
    <h2>About Me</h2>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="image">
              <img src={uiDeveloper} alt=""/>
            </div>
      </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="about-me">
                  <p>Web Developer with Around 2 years and 6 months of experience. Develop highly interactive Front end / User Interfaces for Websites.<br/><br/>
                    Interested in the entire frontend spectrum and working on ambitious projects. Proficient at Web Application, Website Design, Ecommerce Development and Search Engine Optimization. I have done my graduated Bachelor of Engineering in 2019 Batch</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="wrapper">
                                <img src={Experience} alt=""/>
                                <p>2 Year Experience</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="wrapper">
                                <img src={Graduate} alt=""/>
                                <p>B.E Graduate</p>
                            </div>
                    </div>
                    </div>
                </div>
          </div>
      </div>
    </div>
  </section>
  </div>
);


export default AboutMe;
