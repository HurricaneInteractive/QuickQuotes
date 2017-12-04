import React, { Fragment } from 'react'
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

export default class AppRouter extends React.Component {
    render() {
        // const Fragment = React.Fragment;

        return (
            <Router>
                <Fragment>
                    <Navigation auth="false" />
                    <div id="app">
                        <div className="content-container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={Home} />
                                <Route path="/register" component={Home} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}