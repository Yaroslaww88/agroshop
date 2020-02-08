import React, { Component, useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'

const MainAdmin = () => {

    const [auth, setAuth] = useState(false)

    /*useEffect(() => {
        function handleAuthChange(status) {
            setAuth(status)
        }
    })*/

    const onLogIn = () => {
        localStorage.setItem('auth', true)
        setAuth(true)
    } 

    const onLogOut = () => {
        localStorage.removeItem('auth')
        setAuth(false)
    } 

    return (
        <div>
            {auth === false ? 
                <LoginPage onLogIn={() => onLogIn()}/>
            : null}
            {auth === true ? 
                <AdminPage onLogOut={() => onLogOut()}/>
            : null}
        </div>
    );
}

export default MainAdmin;