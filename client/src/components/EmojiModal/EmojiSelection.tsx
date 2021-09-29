import React from 'react'
import { cate1, cate2, cate3, cate4, cate5, cate6, cate7, cate8 } from '../../images/images';
import CateLabel from './CateLabel'

function EmojiSelection() {
    return (
        <section className='emoji-selection'>
        <CateLabel icon={cate1} type={'People'}/>
        <CateLabel icon={cate2} type={'Nature'}/>
        <CateLabel icon={cate3} type={'Food'}/>
        <CateLabel icon={cate4} type={'Activities'}/>
        <CateLabel icon={cate5} type={'Travel'}/>
        <CateLabel icon={cate6} type={'Objects'}/>
        <CateLabel icon={cate7} type={'Symbols'}/>
        <CateLabel icon={cate8} type={'Flags'}/>
    </section>
    )
}

export default EmojiSelection
