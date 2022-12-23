import React from 'react'
import * as Icon from 'react-bootstrap-icons';


export default function Experienceitem(props) {
    

    return (
        <div>
            <div className='flex my-8 '>
                <div className='mr-5'>
                    <Icon.ShieldFillCheck className='inline-block align-baseline' />
                </div>
                <div>
                    <p className='text-base font-bold'>{props.itemName}</p>
                    <p className='text-xs text-slate-100'>{props.itemLevel}</p>
                </div>
            </div>
        </div>
    )
}
