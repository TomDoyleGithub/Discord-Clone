import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';

function HeadsetChoice({ deafen, headset, headsetOff }) {
    return (
        <>
          {!deafen ? (
              <>
              <section className='user-bubble normal-font f500'>Deafen<AiOutlineCaretRight className='user-triangle' style={{right: '26px'}}/></section>
              <img src={headset} alt='Mic Icon' style={{width: '17px'}}/>
              </>
          ) : (
              <>
              <section className='user-bubble normal-font f500'>Undeafen<AiOutlineCaretRight className='user-triangle' style={{right: '34px'}}/></section>
              <img src={headsetOff} alt='Mic Icon' style={{width: '17px'}}/>
              </>
          )}
        </>
    )
}

export default HeadsetChoice
