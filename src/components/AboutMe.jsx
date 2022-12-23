import React, { useEffect, useState } from 'react'
import about from '../assets/me-about.jpg';
import * as Icon from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './Redux/githubSlice'

export default function AboutMe() {
    
    const dispatch = useDispatch()
    const {data,loading} =useSelector((state) => state.gitDataSlice)
    useEffect(()=>{
        dispatch(fetchData())
    },[])

    


    return (
        <div id='AboutMe'>
            
            <div className='Flex-center'>
                <p className='text-base'>Get To Know</p>
                <p className='text-3xl'>About Me</p>
                <div className='md:grid md:grid-cols-2 mt-32 '>
                    {/* Avatar photo */}
                    <div className='col-span-1 Flex-center'>
                        <div className='w-4/6'>
                            <img src={about}></img>
                        </div>
                    </div>

                    {/* Expreience */}
                    <div className='col-span-1 mt-10 mx-3'>
                        {/* Boxes */}
                        <div className='flex gap-10'>
                            {/* Expreience */}
                            <div className='Boxer'>
                                <Icon.Award />
                                <p>Expreience</p>
                                <p className='text-base'>{(new Date().getFullYear()) - 2020}+ Years Working</p>
                            </div>

                            {/* Clienst */}
                            <div className='Boxer'>
                                <Icon.People />
                                <p>Clienst</p>
                                <p className='text-base'>{(new Date().getFullYear()) - 2020}+ Years Working</p>
                            </div>

                            {/* Clienst */}
                            <div className='Boxer'>
                                <Icon.Git />
                                <p>Projects</p>
                                {data != [] &&
                                    <p className='text-base'>{data.length} Completed</p>}
                            </div>
                        </div>
                        {/* Lorem */}
                        <p className='py-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        <button className='px-5 py-2 flex items-center bg-regal-blue rounded-md'><Icon.Whatsapp className='text-green-600' /> Talk Me</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
