import React from 'react'

const About = () => {
    return (
        <section>
        <h1 className='head-text'>
        Salut, je m'appelle{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Weberson
        </span>{" "}
        👋
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          
            <div className='block-container w-20 h-20' key="">
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src=""
                  alt=""
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          
        </div>
      </div>

        <div>
            
        </div>
        </section>
    )
}

export default About
