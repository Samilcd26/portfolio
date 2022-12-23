import React from 'react'
import Experienceitem from './helpers/Experienceitem';


export default function Experience() {
    return (
        <div id='Experience'>
            <div className=' Flex-center mt-36 mx-10'>
                <p className='text-sm'>What Skills I Have</p>
                <p className='text-3xl'>My Experience</p>

                <div className='grid grid-cols-2 min-w-full my-20 gap-5'>
                    <div className='col-span-1 Flex-center bg-regal-blue rounded-xl py-10 '>
                        <p>Frontend Technologies</p>
                        <div className='flex  max-w-xs flex-wrap gap-x-24 mx-5' >
                            {/* Items */}
                            <Experienceitem itemName={"HTML"} itemLevel={"Beginer"}/>
                            <Experienceitem itemName={"React"} itemLevel={"Beginer"}/>
                            <Experienceitem itemName={"CSS"} itemLevel={"Beginer"}/>
                            <Experienceitem itemName={"Tailwind"} itemLevel={"Beginer"}/>
                        </div>

                    </div>

                    <div className='col-span-1 Flex-center bg-regal-blue rounded-xl py-10 ' >
                    <p>Backend Technologies</p>
                        <div className='flex  max-w-xs flex-wrap gap-x-24 mx-5'>
                            {/* Items */}
                            <Experienceitem itemName={"Java"} itemLevel={"Beginer"}/>
                            <Experienceitem itemName={"ExpressJs"} itemLevel={"Beginer"}/>
                            <Experienceitem itemName={"Python"} itemLevel={"Beginer"}/>
                            <Experienceitem itemName={".NET"} itemLevel={"Beginer"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
