import React from 'react'
import { IoChevronDownSharp } from "react-icons/io5";

function CateLabel({ icon, type }) {
    return (
        <section className='emoji-cate-conatiner'>
        <div className='cate-clickable'>
            <img src={icon} alt='Icon' className='small-cate-icon'/>
            <p className='cate-title normal-font f500'>{type}</p>
            <IoChevronDownSharp className='emoji-chevron'/>
        </div>
    </section>
    )
}

export default CateLabel
