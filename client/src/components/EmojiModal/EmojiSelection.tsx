import React, { useState } from 'react'
import { cate1, cate2, cate3, cate4, cate5, cate6, cate7, cate8 } from '../../images/images';
import CateLabel from './CateLabel';
import OfficialEmojiSelect from './OfficialEmojiSelect';

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
        <div className='sticky-time people' data-value='people' onClick={handleClick}><CateLabel state={people} icon={cate1} type={'People'}/></div>
        {people ? <OfficialEmojiSelect type={'people'} /> : <></>}

        <div className='sticky-time' data-value='nature' onClick={handleClick}><CateLabel state={nature} icon={cate2} type={'Nature'}/></div>
        {nature ? <OfficialEmojiSelect type={'nature'} /> : <></>}

        <div className='sticky-time' data-value='food' onClick={handleClick}><CateLabel state={food} icon={cate3} type={'Food'}/></div>
        {food ? <OfficialEmojiSelect type={'food'} />  : <></>}

        <div className='sticky-time' data-value='activities' onClick={handleClick}><CateLabel state={activities} icon={cate4} type={'Activities'}/></div>
        {activities ? <OfficialEmojiSelect type={'activities'} />  : <></>}

        <div className='sticky-time' data-value='travel' onClick={handleClick}><CateLabel state={travel} icon={cate5} type={'Travel'}/></div>
        {travel ? <OfficialEmojiSelect type={'travel'} /> : <></>}

        <div className='sticky-time' data-value='objects' onClick={handleClick}><CateLabel state={objects} icon={cate6} type={'Objects'}/></div>
        {objects ? <OfficialEmojiSelect type={'objects'} />  : <></>}

        <div className='sticky-time' data-value='symbols' onClick={handleClick}><CateLabel state={symbols} icon={cate7} type={'Symbols'}/></div>
        {symbols ? <OfficialEmojiSelect type={'symbols'} />  : <></>}

        <div className='sticky-time' data-value='flags' onClick={handleClick}><CateLabel state={flags} icon={cate8} type={'Flags'}/></div>
        {flags ? <OfficialEmojiSelect type={'flags'} />  : <></>}
    </section>
    )
}

export default EmojiSelection
