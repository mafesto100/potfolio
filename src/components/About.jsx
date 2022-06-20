  import React from 'react'
 


const About = () => {
    return (
      <div name="about" className='h-screen w-full bg-slate-900 to-slate-800 text-slate-300'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex'>
            <div>
                <p className='text-teal-500 py-4 font-signature'>
                    Hello there, my name is
                </p>
                
                <h1 className='text-6xl font-bold'>
                    Mafesto Mdlovu.
                </h1>
                
                <p className='py-4 max-w-4xl text-xl'>
                    I am a recent graduate with a qualifaction in BSc in Computing. I am interested in 
                    building and creating exceptional digital experiences. Currently, I am learning
                    Backend Development with a focus in <span className='text-teal-500' >C#</span> together with the <span className='text-teal-500' >.NET Framework</span>, SQL as well as following good 
                    software development practices.
                </p>
                <br></br>
            </div>
        
        
        </div>
      </div>
    )
  }
  
  export default About;