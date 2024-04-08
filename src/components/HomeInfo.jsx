import React from 'react'
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText} 
        <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)
const renderContent = { 
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Salut! moi c'est
            <span className='font-semibold mx-2 text-white'>Weberson,</span>
            👋
        <br />
        développeur web
        </h1>

    ),
    2: (
        < InfoBox
            text="Formé a l'EPITECH, j'ai acquis certaines compétences et surtout une métode de travail pendant mon parcours "
            link="/about"
            btnText="en savoir plus"
            
        />
    ),
    3: (
        < InfoBox
            text="Voici quelques un de mes projets"
            link="/projects"
            btnText=" Portfolio"
        />
    ),
    4: (
        < InfoBox
            text="Vous avez un projet en tête et recherchez un développeur"
            link="/contact"
            btnText="Contactez moi"
        />
    ),

    }

    const HomeInfo = ({ currentStage }) => {
    
    return renderContent[currentStage] || null; 
    }
    
    export default HomeInfo;
    