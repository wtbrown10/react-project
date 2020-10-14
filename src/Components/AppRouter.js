import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RentRoom from './RentRoom'
import ReturnRoom from './ReturnRoom'
import Home from './Home'

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/RentRoom'>
                    <RentRoom />
                </Route>
                <Route exact path='/ReturnRoom'>
                    <ReturnRoom />
                </Route>
            </Switch>
        </div>
    )
}
