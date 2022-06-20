import React from 'react'

const Sovtech = () => {
  return (
    <div name='sovtech' className='w-full h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-teal-500'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-2'>
                <p className='text-2xl font-bold inline border-b-4 border-teal-500 font-signature'>Why Sovtech?</p>
            </div>

            <p className='text-xl mt-20 text-slate-300'>
                As a recent graduate looking to get a foot into software development, I am seeking a platform where I can
                apply skills and insights gained from University. I would also like to <span className='text-teal-500' >enhance my knowledge by learning from 
                from the passionate and smart indusrty experts at Sovtech </span> as this will help me grow proffesionaly, both from 
                a tehcnical and soft skills standpoint.
            </p>
            
            <p className='text-xl mt-16 text-slate-300'>
                I have gone through the company's profile and I have learned that Sovtech has a supportive culture that 
                <span className='text-teal-500' > encourages upskilling and mentoring of fresh talent</span>, which is essential for career fastracking. These values 
                fit exactly what I am looking for and I know that it would be a golden opportunity for me to wrok here and 
                enhance my skills.
            </p>
        </div>

        <br/>

    </div>
  )
}

export default Sovtech;