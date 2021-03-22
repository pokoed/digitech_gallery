import React from 'react'
import firebase from 'firebase'
import {Route, Link} from 'react-router-dom'

function Header() {

    const handleLogout = () => {
        firebase.auth().signOut();
    }

    return (
        <div className='header'>
            <nav>
                <ul className='float'>
                    <Link to='/home'><li  style={{cursor: 'pointer'}}>Home</li></Link>
                    <Link to='/profile'><li  style={{cursor: 'pointer'}}>Profile</li></Link>
                    <Link to='/legend'><li style={{cursor: 'pointer'}}>Legend</li></Link>
                    <li onClick={handleLogout} style={{cursor: 'pointer'}}><span className='logout'>Logout</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
