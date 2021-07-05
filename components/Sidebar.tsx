import React from 'react'
import img1 from '../public/pranit.jpg'
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes';
function Sidebar() {

    const{theme, setTheme}=useTheme();


    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    };
    return (
        <div className='dark:text-black'>
            <Image className='w-32 h-32 mx-auto rounded-full' src={img1} alt="rgrgrg" />

            <h3 className='flex items-center justify-center my-4 text-3xl font-medium tracking-wide text-blue-400 font-kaushan'>
                <span className="text-green ">Pranit</span>Bhatt
            </h3>
            <p className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
           
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full '
                href="https://drive.google.com/drive/folders/140CTTBjrWuniJmZ2Rn4BUu3GwkmBywkM?usp=sharing"
                download="name">
                <GiTie className='w-6 h-6' />Download Resume
            </a>
            {/*//social icons*/}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-red-700 md:w-full'> 
                <a href="https://github.com/pranit390" target="_blank" rel="noreferrer">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>

                <a href="https://www.linkedin.com/in/pranit-bhatt-ba7ba4190" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>

            {/*//address*/}

            <div className='py-4 my-5 bg-gray-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>

                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Bangalore,India</span>
                </div>
                <p className='my-2'>bhattt.pranit390@gmail.com</p>
                <p className='my-2'>7247371480</p>
            </div>
            {/*//Email Button*/}

            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-indigo-200 focus:outline-none '
            onClick={()=>window.open('mailto:bhattt.pranit390@gmail.com')}>Email Me</button>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-indigo-200 focus:outline-none' onClick={changeTheme}>Toggle theme</button>

        </div>
    )
}

export default Sidebar
