import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CUSTOM_STATUS } from '../../redux/actions';

function CustomStatusModal() {
    const dispatch = useDispatch();
    const hideModal = () => {
        dispatch({ type: TOGGLE_CUSTOM_STATUS, showModal: false});
    };
    const { customStatusModal  } = useSelector((state: RootStateOrAny) => state);
    return (
        <div onClick={hideModal} className={'modal-container ' + (customStatusModal ? 'show' : 'hide')}>
            
        </div>
    )
}

export default CustomStatusModal
