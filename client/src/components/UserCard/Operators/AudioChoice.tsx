import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';

function AudioChoice({ mute, mic, micOff }) {
    return (
        <>
         {!mute ? (
             <>
             <section className='user-bubble normal-font f500'>Mute<AiOutlineCaretRight className='user-triangle' style={{right: '20px'}}/></section>
             <img src={mic} alt='Mic Icon' style={{width: '12px'}}/>
             </>
         ) : (
             <>
             <section className='user-bubble normal-font f500'>Unmute<AiOutlineCaretRight className='user-triangle' style={{right: '28px'}}/></section>
             <img src={micOff} alt='Mic Icon' style={{width: '15px', position: 'relative', left: '0.45px'}}/>
             </>
         )}
        </>
    )
}

export default AudioChoice
