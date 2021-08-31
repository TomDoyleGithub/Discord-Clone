import React from 'react';
import './navigation.scss';
import Auth from '../../utils/auth';


function DesktopNav() {
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <div>
            <p>Nav</p>
        </div>
    )
}

export default DesktopNav
