import React from 'react'
import { cate1, cate2, cate3, cate4, cate5, cate6, cate7, cate8 } from '../../images/images';

function EmojiCategory() {
    return (
        <section className='emoji-category'>
            <div className='cate-icon-container'><img src={cate1} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate2} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate3} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate4} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate5} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate6} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate7} alt='Icon' className='cate-icon'/></div>
            <div className='cate-icon-container'><img src={cate8} alt='Icon' className='cate-icon'/></div>
        </section>
    )
}

export default EmojiCategory
