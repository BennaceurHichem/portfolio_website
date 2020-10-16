import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';

const languages = [
    {
        icon: react,
        name: 'React',
        level: '80'
    },

    {
        icon: react,
        name: 'React Native',
        level: '60'
    },
    {
        icon: react,
        name: 'Node.js',
        level: '70'
    },
    {
        icon: react,
        name: 'Android',
        level: '70'
    },
    {
        icon: react,
        name: 'Ecommerce & Digital marketing',
        level: '90'
    },
    {
        icon: react,
        name: 'Django',
        level: '50'
    },
    {
        icon: react,
        name: 'Agile Development',
        level: '75'
    }
]

const tools = [
    {
        icon: react,
        name: 'VS Code ',
        level: '90'
    },
    {
        icon: react,
        name: 'Software Architecure ',
        level: '70'
    },
    {
        icon: react,
        name: 'Software Conception',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '60'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering Higher school
                        </h5>
                        <p className="resume-card__name">
                            ESI(2016-2021)
                        </p>
                        <p className="resume-card__details">I am currently persuing an engineering degree  in Computer Science  at ESI in algiers, Algeria</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                          YASSIR(2019)
                        </p>
                        <p className="resume-card__details">I work as a intern at YASSIR for 2 months </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Frameworks
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                       Skills 
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;