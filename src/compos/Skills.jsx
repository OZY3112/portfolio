import React from 'react';
import react from './techimgs/React-icon.png'
import JS from './techimgs/js-icon.png'
import firebase from './techimgs/firebase-icon.png'
import html from './techimgs/html-icon.svg'
import Node from './techimgs/node-logo.png'
import sass from './techimgs/SASS-icon.png'
import ts from './techimgs/typescript-icon.svg'
import Techitem from './ui/techitem';
import css from './techimgs/css.svg'
import bootstrap from './techimgs/Bootstrap_logo.svg.png'
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Skills = ({lightmode, darkmode}) => {
    return (
        <section id="skills">
     

            <div className="skill__cont" style={{color: lightmode ? "black" : "#e0e0e0"}}>
                <div className="skill__section--title--cont">
                    <h2 className="skill__section--title" data-aos="fade-up">My <span className="blue"> technological Stack</span>.</h2>
                </div>
             <div className="skills__skill--cont">

                <div className="skill__Proficient--cont">
                    <div className="skill__Proficient" data-aos="fade-up"data-aos-duration="1000">
                        <div className="skill--Proficien--title--cont">
                            <h2 className="skill__Proficient--title">
                                Tech I am <span className="pink"> Proficient </span> with.
                            </h2>
                        </div>
                        <div className="skills__cont"data-aos="fade-up" >
                        <div className="skills">
                            <Techitem lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="React" techimg={react} />
                            <Techitem lightmode={lightmode}  data-aos="fade-up"data-aos-duration="200" techname="JavaScript" techimg={JS}/>
                            <Techitem lightmode={lightmode} data-aos="fade-up"data-aos-duration="400" techname="HTML" techimg={html}/>
                            <Techitem lightmode={lightmode} data-aos="fade-up"data-aos-duration="700" techname="CSS" techimg={css}/>
                            <Techitem lightmode={lightmode} data-aos="fade-up"data-aos-duration="100" techname="SASS" techimg={sass}/>
                            <Techitem lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="Node.js" techimg={Node}/>
                            <Techitem lightmode={lightmode}  data-aos="fade-up"data-aos-duration="500" techname="Firebase" techimg={firebase}/>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className="skill__Familiar--cont" data-aos="fade-up" data-aos-duration="500">
                    <div className="skill__Familiar">
                    <div className="skill--Familiar--title--cont">
                            <h2 className="skill__Familiar--title">
                                Tech I am <span className="pink"> Familiar </span>with.
                            </h2>
                    </div>
                    <div className="skills__cont" data-aos="fade-up">
                        <div className="skills">
                            <Techitem  lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="TypeScript" techimg={ts}/> 
                            <Techitem  lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="BootStrap" techimg={bootstrap}/> 
                            
                        </div>
                    </div>
                    </div>
                </div>
             </div>
            </div>
        </section>
    );
}

export default Skills;
