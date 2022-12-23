import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Icon from 'react-bootstrap-icons';
import { fetchData } from './Redux/githubSlice'
import { motion } from 'framer-motion'


export default function Projects() {

    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state.gitDataSlice)


    const carousel = useRef(null)
    const [width,setWidth]=useState(0);

    useEffect(() => {
        dispatch(fetchData())
        console.log(carousel.current);
    }, [])
    const convertDate = (t) => {

        return t.slice(0, 10);
    }

    return (
        <div className='Flex-center h-[500px]' id='Projects'>
            <div className='Flex-center  w-full h-full overflow-hidden relative '>
                <p className='text-sm'>What Repo I Have</p>
                <p className='text-3xl'>My Repositories</p>
                <motion.div drag='x' dragConstraints={{left:0}} className='mt-14 flex  gap-4 justify-center relative' ref={carousel}>
                    {/* İtems */}
                    {data != [] && data.map(repo => (
                        <motion.div whileHover={{scale:1.5}} className=' rounded-md border-2 w-[400px] max-h-32 px-4 bg-main-bg-color' key={repo.id}>
                            <p><a href={repo.html_url}>{repo.name}</a></p>
                            <p className='text-sm my-2'>{repo.description}</p>
                            <div className='flex justify-between text-sm'>
                                <p>{repo.language}</p>
                                <p>{convertDate(repo.pushed_at)}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <p className='text-sm float-right absolute bottom-56 right-3'>Length: {data.length}</p>
            </div>

        </div>
    )
}
