import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Sass from '../assets/sass.png';
import TypeScript from '../assets/typescript.png';

const Skills = () => {
  return (

    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4' >\\ These are the technologies I've worked with</p>
                
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML-icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS-icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Github-icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="JavaScript-icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node-icon" />
                    <p className='my-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React-icon" />
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-22 h-20 mx-auto' src={Sass} alt="Sass-icon" />
                    <p className='my-4'>Sass</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TypeScript} alt="TypeScript-icon" />
                    <p className='my-4'>TypeScript</p>
                </div>
            </div>    

        </div>
    </div>
  )
}

export default Skills