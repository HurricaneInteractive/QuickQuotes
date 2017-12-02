import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'

// Global Elements
import { Navigation } from './globals/Navigation'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>  
        </Router>
    )
}