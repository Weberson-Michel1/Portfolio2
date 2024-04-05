import React from 'react'
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-x1 text-center">{text}</p>
        <link to={link} className="neo-brutalism-white neo-btn">
            {btnText} 
        </link>
    </div>
)
const renderContent = { 
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Salut! moi c'est
            <span className='font-semibold mx-2 text-white'>Weberson,</span>
            👋
        <br />
        développeur web
        </h1>

    ),
    2: (
        < InfoBox
            text="Formé a l'EPITECH"
            link="/about"
            
        />
    ),
    3: (
        < InfoBox
            text="Voici quelques un de mes projets"
            link="/projects"
            
        />
    ),
    4: (
        < InfoBox
            text="Contactez moi"
            link="/contact"
            
        />
    ),

    }

    const HomeInfo = ({ currentStage }) => {
    
    return renderContent[currentStage] || null; 
    }
    
    export default HomeInfo;
    