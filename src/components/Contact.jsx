import React from 'react'
import * as Icon from 'react-bootstrap-icons';


export default function Contact() {
  return (
    <div className='text-center' id='Contact'>
      <p>Contact Me</p>
      <div className='md:grid md:grid-cols-3 mt-24 gap-10 mx-10'>

        {/* Connect Links */}
        <div className='col-span-1 flex flex-col items-center  gap-10'>
            {/* Email */}
            <div className='MessageBox'>
                <p className='text-3xl'><Icon.EnvelopeAtFill/></p>
                <p>Email</p>
                <p className=''>samilcd.26@outlook.com</p>
            </div>

            {/* Linkledin */}
            <div className='MessageBox'>
                <p className='text-3xl'><Icon.Linkedin/></p>
                <p>Linkedin</p>
                <p>samilcdemir</p>
            </div>

            {/* Whatsapp */}
            <div className='MessageBox'>
                <p className='text-3xl'><Icon.EnvelopeAtFill/></p>
                <p>Email</p>
                <p>samilcd.26@outlook.com</p>
            </div>
        </div>

        {/* Connect mesasge */}
        <div className='col-span-2 relative mt-16'>
            <div className='flex flex-col space-y-9 '>
                <input className='MessageInput ' placeholder='Your full name'/>
                <input className='MessageInput' placeholder='Your email'/>
                <input className='rounded-lg pt-3 pb-40 px-5 bg-transparent border-l-2 border-r-2  focus:outline-none focus:border-2 border-regal-blue' placeholder='Your message'/>
                
                <button className='float-right absolute -bottom-20 md:bottom-2 border-2 px-5 py-3 rounded-xl border-regal-blue hover:bg-regal-blue hover:text-dirty-white'>Send Message</button>
            </div>
        </div>
      </div>
    </div>
  )
}
