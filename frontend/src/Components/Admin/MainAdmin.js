import React, { Component, useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import { useCookies } from 'react-cookie'

const MainAdmin = ({history}) => {

    const [reload, setReload] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies('')

    const onLogIn = () => {
        window.location.reload(); 
    } 

    const onLogOut = () => {
        removeCookie('user')
        window.location.reload(); 
    } 

    return (
        <div>
            {cookies.user ? 
                <AdminPage onLogOut={onLogOut}/>
            : <LoginPage onLogIn={onLogIn}/>}
            
        </div>
    );
}

export default MainAdmin;