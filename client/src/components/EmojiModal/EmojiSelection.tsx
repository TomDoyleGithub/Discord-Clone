import React, { useState } from 'react'
import { cate1, cate2, cate3, cate4, cate5, cate6, cate7, cate8 } from '../../images/images';
import CateLabel from './CateLabel'

function EmojiSelection() {
    // Toggle states for emoji categories
    const [people, setPeople] = useState(true);
    const [nature, setNature] = useState(true);
    const [food, setFood] = useState(true);
    const [activities, setActivities] = useState(true);
    const [travel, setTravel] = useState(true);
    const [objects, setObjects] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [flags, setFlags] = useState(true);

    // Click event which decides which toggle state to change depending on the data value attribute
    const handleClick = (e) => {
        console.log('HERE')
        const type = e.currentTarget.getAttribute('data-value');
        switch (type) {
            case 'people':
                setPeople(!people)
                break;
            case 'nature':
                setNature(!nature)
                break;
            case 'food':
                setFood(!food)
                break;
            case 'activities':
                setActivities(!activities )
                break;
            case 'travel':
                setTravel(!travel )
                break;
            case 'objects':
                setObjects(!objects )
                break;
            case 'symbols':
                setSymbols(!symbols )
                break;
            case 'flags':
                setFlags(!flags )
                break;
        }
    };

    return (
        <section className='emoji-selection'>
        <div className='sticky-time' data-value='people' onClick={handleClick}><CateLabel icon={cate1} type={'People'}/></div>
        {people ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='nature' onClick={handleClick}><CateLabel icon={cate2} type={'Nature'}/></div>
        {nature ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='food' onClick={handleClick}><CateLabel icon={cate3} type={'Food'}/></div>
        {food ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='activities' onClick={handleClick}><CateLabel icon={cate4} type={'Activities'}/></div>
        {activities ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='travel' onClick={handleClick}><CateLabel icon={cate5} type={'Travel'}/></div>
        {travel ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='objects' onClick={handleClick}><CateLabel icon={cate6} type={'Objects'}/></div>
        {objects ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='symbols' onClick={handleClick}><CateLabel icon={cate7} type={'Symbols'}/></div>
        {symbols ? <section className='offical-emoji-selection'></section> : <></>}

        <div className='sticky-time' data-value='flags' onClick={handleClick}><CateLabel icon={cate8} type={'Flags'}/></div>
        {flags ? <section className='offical-emoji-selection'></section> : <></>}
    </section>
    )
}

export default EmojiSelection
