import React, { Component } from 'react'
import { Switch, Route, Redirect, BrowserRouter, withRouter, useRouteMatch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import HomePage from './HomePage'
import Navbar from './NavbarComponent'
import Footer from './FooterComponent'
import AboutComponent from './AboutComponent'
import Header from './HeaderComponent'
import ItemPageComponent from './ItemPageComponent' 

const Main = (props) => {

    let { path, url } = useRouteMatch();

    console.log(props)

    return (
        <>
        
            <Header />
            <Navbar />   

            <Switch>
                <Route exact path={path} component={HomePage}/>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/:id" component={ItemPageComponent}/>
            </Switch>
        </>
    );
}

export default withRouter(Main);