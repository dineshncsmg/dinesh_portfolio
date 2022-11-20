import React from 'react';
import SkillOne from '../images/html.png';
import SkillTwo from '../images/css.png';
import SkillThree from '../images/js.png';
import SkillFour from '../images/react-js.png';
import SkillFive from '../images/bootstrap.png';
import SkillSix from '../images/jquery.png';
import SkillSeven from '../images/wordpress.png';
import SkillEight from '../images/java.png';

const Skills = () => (
  <div>
<section id="skills_dinesh" className="skills_dinesh"> 
    <h2>Skills</h2>
    <div className="container">
            <div className="skills">
                <img src={SkillOne } alt="" />
                <img src={SkillTwo} alt="" />
                <img src={SkillThree} alt="" />
                <img src={SkillFour} alt="" />
                <img src={SkillFive} alt="" />
                <img src={SkillSix} alt="" />
                <img src={SkillSeven} alt="" />
                <img src={SkillEight} alt="" />
            </div>
    </div>
  </section>
  </div>
);


export default Skills;
