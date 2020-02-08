import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomePage from './HomePage';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import AboutComponent from './AboutComponent';
import Header from './HeaderComponent';

const Main = (props) => {
    return (
        <>
        
            <Header />
            <Navbar />   

            <TransitionGroup>
                <CSSTransition classNames="page" timeout={300}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutComponent} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

        </>
    );
}

export default withRouter(Main);