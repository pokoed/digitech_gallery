import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../header/Header'
import { useDispatch, useSelector } from 'react-redux';
import ProfilePage from './profilePage/ProfilePage'
import firebase from '../../firebase'

function MainPage() {
    return (
        <div>
            <Header />
            Home
            <Button></Button>
            <ProfilePage />
        </div>
    )
}

export default MainPage
