import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';

function CustomStatusModal() {
    const { showScreenModal  } = useSelector((state: RootStateOrAny) => state);
    return (
        <div className={'modal-container ' + (showScreenModal ? 'show' : 'hide')}>
            
        </div>
    )
}

export default CustomStatusModal
