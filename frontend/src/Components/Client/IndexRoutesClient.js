import React from 'react'
import { Switch, Route, withRouter, useRouteMatch } from 'react-router-dom'
import MainPage from './MainPage'
import Navbar from './Navbar'
import AboutComponent from './About'
import Header from './Header'
import ItemPageComponent from './ItemPageComponent' 

const Main = (props) => {

    let { path } = useRouteMatch();

    return (
        <>
            <Navbar />   

            <Switch>
                <Route exact path={path} component={MainPage}/>
                <Route exact path="/about/" component={AboutComponent}/>
                <Route exact path="/:id" component={ItemPageComponent}/>
            </Switch>
        </>
    );
}

export default withRouter(Main);