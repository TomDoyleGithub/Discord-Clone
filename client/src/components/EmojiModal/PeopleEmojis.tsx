import React from 'react'

function PeopleEmojis() {
    const peopleArr = [
    {dim: '0.1px 0px', name: ':grinning'}, 
    {dim: '-31.9px 0px', name: ':smiley:'},
    {dim: '-63.8px 0px', name: ':smile:'}, 
    {dim: '-95.6px 0px', name: ':grin:'}, 
    {dim: '-127.7px 0px', name: ':laughing: :satisfied:'}, 
    {dim: '-159.6px 0px', name: ':sweat_smile:'}, 
    {dim: '-191.2px 0px', name: ':joy:'}, 
    {dim: '-223.2px 0px', name: ':rofl: :rolling_on_the_floor_laughing:'}, 
    {dim: '-255.2px 0px', name: ':relaxed:'}, 
    {dim: '-287.2px 0px', name: ':blush:'},
    {dim: '-319.2px 0px', name: ':innocent:'}, 
    {dim: '-350.8px 0px', name: ':slight_smile: :slightly_smiling_face:'}, 
    {dim: '-382.8px 0px', name: ':upside_down: :upside_down_face:'}, 
    {dim: '-414.8px 0px', name: ':wink:'}, 
    {dim: '-446.8px 0px', name: ':relieved:'}, 
    {dim: '-478.5px 0px', name: ':smiling_face_with_tear:'}, 
    {dim: '-510.5px 0px', name: ':heart_eyes:'}, 
    {dim: '-542.4px 0px', name: ':smiling_face_with_3_hearts:'} 
];

    const handleHover = (e) => {
        const name = e.currentTarget.getAttribute('data-value');
    };

    return (
        <>
            {peopleArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}
        </>
    )
}

export default PeopleEmojis
