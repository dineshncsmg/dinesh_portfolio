import React from 'react';
import ExperienceImg from '../images/exp-vector.png';

const Experience = () => (
  <div>
<section id="experience_dinesh" className="experience_dinesh"> 
    <h2>Experience</h2>
    <div className="container">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="experience">
                <div className="card">
                    <span>April 2022 - Dec 2023</span>
                    <h3>Web Developer - Xerago</h3>
                    <p>Chennai</p>
                 </div>
                   <div className="card">
                      <span>June 2021 - March 2022</span>
                      <h3>Web Developer - Kiluvai Tech Solution</h3>
                      <p>Chennai</p>
                   </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               <div className="image">
                <img src={ExperienceImg} alt=""/>
               </div>
         </div>
      </div>
    </div>
  </section>
  </div>
);


export default Experience;
