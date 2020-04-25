import React, { Component, useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import { useCookies } from 'react-cookie'
import { fetchAdminLogin, fetchAdminLogout } from '../utils'

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const MainAdmin = ({ history }) => {

    const [status, setStatus] = useState(0)
    const [cookies, setCookie, removeCookie] = useCookies('')

    const onLogin = (login, password) => {
        try {
            await fetchAdminLogin(login, password)
            window.location.reload(); 
        } catch(err) {
            setStatus(types.UNSUCCESS)
        }
    } 

    const onLogout = () => {
        try {
            await fetchAdminLogout()
            window.location.reload(); 
        } catch(err) {
            setStatus(types.UNSUCCESS)
        }
    } 

    return (
        <div>
            {status === types.SUCCESS ? 
                <AdminPage onLogout={onLogout}/>
            : <LoginPage onLogin={onLogin}/>}
            
        </div>
    );
}

export default MainAdmin;