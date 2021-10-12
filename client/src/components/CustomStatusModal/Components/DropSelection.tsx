import React from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_EMOJI_POSITION } from '../../../redux/actions';
import ExpireDropdown from '../Dropdowns/ExpireDropdown';
import StatusDropdown from '../Dropdowns/StatusDropdown';
import { handleDrop } from '../EventFunctions/handleDrop';

function DropSelection({setStatusDrop, setExpireDrop, expireDropdown, statusDropdown, realStatus}) {
    const dispatch = useDispatch();
    return (
        <>
            <div data-value='date' onClick={(e) => handleDrop(e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown)} >{expireDropdown ? <ExpireDropdown/> : <></>}</div>
            <div data-value='status' onClick={(e) => handleDrop(e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown)}>{statusDropdown ? <StatusDropdown status={realStatus}/> : <></>}</div>
        </>
    )
}

export default DropSelection
