import React from 'react'

/**
 * Render <h1> with title
 * 
 * @param {string} props 
 */
export const PageTitle = (props) => (
    <div className="page-title">
        <h1>{props.title}</h1>
        <div className="deco-line" />
    </div>
)