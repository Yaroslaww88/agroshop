import { Switch, withRouter } from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react'
import { RouteWithSubRoutes } from '../utils/myRoutes'
import {
    Container
} from 'reactstrap'

const Index = ({ routes }) => {

    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
}

export default withRouter(Index);