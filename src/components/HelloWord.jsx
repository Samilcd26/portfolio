import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import image from '../assets/me.png';

export default function HelloWord() {

    

    return (
        <div className='Flex-center leading-loose h-screen' id='HelloWord'>
            {/* Firts messages */}
            <p>Hello I'm</p>
            <p className='text-4xl font-bold'>Şamil Cihat <span>DEMİR</span></p>
            <p>Fullstack Developer</p>

            {/* Open CV and  Let's Talk buttons*/}
            <div className='mt-10'>
                <button className='Base-button'>Dowland CV</button>
                <button className='Base-button'><a href='#Contact'>Contect Me</a></button>
            </div>

            <div className='min-w-full grid grid-cols-6 Bottom-spacer h-full  '>
                {/* Social media links */}
                <div className='col-span-1 flex flex-col items-center gap-8 relative'>
                    <div className='absolute Bottom-spacer'>
                    <a><Icon.Linkedin className='Social-item'/></a>
                    <a><Icon.Github className='Social-item'/></a>
                    <a><Icon.EnvelopeAt className='Social-item'/></a>
                    </div>
                </div>

                {/* Welcome photo */}
                <div className='col-span-4 Flex-center relative'>
                    <div className='w-6/12 md:w-4/12 absolute Bottom-spacer'>
                        <img src={image} ></img>
                    </div>
                </div>

                {/* Message Scrole Dows */}
                <div className='col-span-1 relative'>
                    <a className='origin-top-right rotate-90 Bottom-spacer right-0 absolute text-xs'>Scrole Down-{'>'} </a>
                </div>
            </div>
        </div>
    )
}
