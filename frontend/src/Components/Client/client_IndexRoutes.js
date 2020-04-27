import React from 'react'
import { 
    Switch, 
    withRouter 
} from 'react-router-dom'
import Navbar from './client_Navbar_Compoent'
import { RouteWithSubRoutes } from '../utils/myRoutes'

const Index = ({ routes }) => {

    return (
        <>
            <Navbar />   

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </>
    );
}

export default withRouter(Index);