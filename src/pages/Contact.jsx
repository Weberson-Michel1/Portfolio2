import React from 'react'

const Contact = () => {
    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w[50%] flex flex-col">
                <h1 className="head-text"> Me contacter</h1>

                <form className="w-full flex flex-col gap-7 mt14">
                    <label className="text-black-500 font-semibold">
                        Nom
                        <input 
                        type="text"
                        name="name"
                        className="input"
                        placeholder=""
                        required
                        

                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Prénom
                        <input 
                        type="text"
                        name="Firstname"
                        className="input"
                        placeholder=""
                        required
                        

                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input 
                        type="email"
                        name="email"
                        className="input"
                        placeholder=""
                        required
                        

                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
            Votre Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder=''
              
            />
          </label>
                    
                </form>
            </div>
            
        </section>
    )
}

export default Contact
