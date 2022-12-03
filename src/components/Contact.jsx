import React from 'react'
import '../components/Contact.css'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {



  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form  action="https://getform.io/f/66d1771d-40b7-42b9-a0a1-f2132b7b266c" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - tazo.gorgadze.02@gmail.com</p>
            </div>
            <input required className='bg-[#ccd6f6] p-2'  placeholder='Name' type='text' name='user_name'/>
            <input required className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' type='email' name='user_email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button id='button' ><span className='z-10 relative'> Submit </span></button>
        </form>
    </div>
  )
}


export default Contact