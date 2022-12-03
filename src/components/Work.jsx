import React from 'react';
import PortfolioIMG from '../assets/work/portfolio-work.png';
import Breakout from '../assets/work/breakout.png';
import Nodeform from '../assets/work/workingform.png';
import Pingpong from '../assets/work/pingpong-game.png';
import Oldwork from '../assets/work/oldwork.png';
import Mommy from '../assets/work/projectM.png';

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
    
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            <div
            className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

                <div style={{backgroundImage: `url(${PortfolioIMG})`}}
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                               HTML/CSS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://codepen.io/tazo-gorgadze/full/poppvyN" rel='noreferrer' target="_blank">
                                <button className='m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white duration-300'>Demo</button>
                            </a>
                            <a href="https://codepen.io/tazo-gorgadze/pen/poppvyN" rel='noreferrer' target="_blank">
                                <button className='m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white duration-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                 style={{backgroundImage: `url(${Breakout})`}}
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                               JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a rel='noreferrer' href="https://codehs.com/sandbox/id/breakout-yzobCX/run" target="_blank">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a rel='noreferrer' href="https://codehs.com/sandbox/id/breakout-yzobCX" target="_blank">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div 
                 style={{backgroundImage: `url(${Pingpong})`}}
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                               JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://codehs.com/sandbox/id/pingpongchomp-56wo5B/run" rel='noreferrer' target="_blank">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://codehs.com/sandbox/id/pingpongchomp-56wo5B" rel='noreferrer' target="_blank">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Nodeform})`}}
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                               Node JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Oldwork})`}}
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                               HTML/CSS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://codepen.io/tazo-gorgadze/full/ZEvyYgY" target="_blank" rel="noreferrer">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://codepen.io/tazo-gorgadze/pen/ZEvyYgY" target="_blank" rel="noreferrer">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                 style={{backgroundImage: `url(${Mommy})`}}
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                               React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://nero707.github.io/react-test1/" target="_blank" rel="noreferrer">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/NeRo707/react-test1" target="_blank" rel="noreferrer">
                                <button className='hover:bg-pink-600 hover:text-white duration-300 m-2 text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Work