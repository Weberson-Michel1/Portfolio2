import CTA from "../components/CTA";
import { skills } from "../constants";

  const About = () => {
    return (
      <section className='max-container'>
        <h1 className='subhead-text'>
          Qui suis-je? 
        </h1>

        <h2 className='Subhead-text'>
          Je m'appelle {""}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Weberson</span>.{" "} Je suis un développeur web passionnée par la 
            création de sites et d'applications web innovantes. En 2022 je suis
            sorti diplomé de la formation CodingAcademy dispensée à l'
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}EPITECH</span>{" "} durant laquelle j'ai pu acquérir des compétences
             <span className='blue-gradient_text font-semibold drop-shadow'> front-end </span> et
             <span className='blue-gradient_text font-semibold drop-shadow' > back-end. </span>
             Toujours à la recherche de nouveaux défis je continue
             de me perfectionner a travers divers projets personnels à commencer par ce portofolio
             entièrement réalisé avec React ainsi de Three.js pour les éléments 3D. 
        </h2>
  
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            
          </p>
        </div>
      
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Compétences</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill) => (
                <div className='block-container w-20 h-20' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-1/2 h-1/2 object-contain'
                  /> 
                </div>
                </div>
          ))}</div>
  
        </div>
  
        <div className='py-16'>
          <h3 className='subhead-text'></h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              
            </p>
          </div>
  
          <div className='mt-12 flex'>
            
          </div>
        </div>
  
        <hr className='border-slate-200' />
  
        <CTA />
      </section>
    );
  };
  
  export default About;