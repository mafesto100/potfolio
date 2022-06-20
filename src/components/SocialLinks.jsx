import React from 'react'
import {FaGithub, FaLinkedin, FaMailBulk} from "react-icons/fa";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={25}/>
                
                </>
            ),
            href: "https://www.linkedin.com/in/mafesto-mdlovu-0b758a22a/"
        },

        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={25}/>
              
                </>
            ),
            href: "https://github.com/mafesto100"
        },

        {
            id: 3,
            child: (
                <>
                Mail <FaMailBulk size={25}/>
               
                </>
            ),
            href: "mailto:mafesto.mdlovu@outlook.com"
        }


    ]

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            
            {links.map(({id, child, href}) => (
                 <li key={id} className={"flex justify-between items-center w-40 h-1/4 px-4 bg-slate-800 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 py-3"}>

                    <a href={href} className='flex justify-between items-center w-full text-teal-500' target='_blank' rel='noreferrer'>
                        {child}
              
                    </a>
                </li>

                ))}

           
        </ul>
    </div>
  )
}

export default SocialLinks;