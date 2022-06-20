import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "about",
        },
        {
            id: 2,
            link: "sovtech",
        },   
    ];

    return (
         <div className="flex justify-around items-center w-full h-20 px-4 text-slate-300 bg-slate-900 fixed ">
        <div>
            <h1 className="text-5xl ml-2 font-signature text-teal-500">MD</h1>
        </div>

        <ul className="hidden md:flex">

            {links.map(({id, link}) => (
              <li key={id} className="px-4 cursor-pointer capitalize font-medium font-signature text-teal-500 hover:scale-110 duration-200">
                <Link to={link} smooth duration={500}> {link} </Link>
              </li>  
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-slate-300 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>


    </div>
    );
};

export default NavBar;