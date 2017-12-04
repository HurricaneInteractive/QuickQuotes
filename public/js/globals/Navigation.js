import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navigation = (props) => {
    return (
        <ul id="navigation">
            { props.auth === "true" ? (
                <Fragment>
                    <li><NavLink activeClassName="active" to="/">New Quote</NavLink></li>
                </Fragment>
            ) : (
                <Fragment>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                    <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>
                </Fragment>
            )}
        </ul>
    )
}