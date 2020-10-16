import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js, and convert them to PWA applications also "
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using, with Node.js,I can develop  REST API using Node.js, or use some trendy technologies and CMS's like Strapi",
    },
    {
        icon: puzzle,
        title: "Mobile developer",
        about: "I worked on android native an React native mobile Apps" 
    },
   
    {
        icon: algo,
        title: "Cloud and DevOps enthusiast  ",
        about: "I'm interesting in DevOps tools like Kubernetes, Docker, mainly in the cloud like AWS and GCP"
    },
    {
        icon: api,
        title: "Agile and Software product managment",
        about: "I got 2 certificates of software product mangment, I worked on a real project as scrum master in a team of interns at YA technologies, I have a strong understanding of agile scrum mathodology  "
    },
    {
        icon: computer,
        title: "Ecommerce and Social Media Advertising ",
        about: "I have a strong understanding of Digital marketing and Ecommerce, I developed and managed a store for a small company with a big budget for 1 year, I'm skillfull also in building Shopify, Ecwid or Woocommerce Ecommerce websites  "
    },
]


const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
            I'm Hichem👋, 22 years old software engineering student, AWS Ambassador student, enjoying solving and implementing ideas, highly motivated to develop my skills in software engineering in general, 
            and AWS cloud development enthusiast            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;