import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../header/Header'
import ProfilePage from './profilePage/ProfilePage'

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
