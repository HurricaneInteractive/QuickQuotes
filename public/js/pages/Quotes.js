import React, { Component, Fragment } from 'react'

import { PageTitle } from '../globals/UI'

export default class Quotes extends Component {
    constructor() {
        super()
        this.state = {
            quotes: null
        }
    }

    componentDidMount() {
        const _this = this
        fetch('/api/quotes', {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                _this.setState({
                    quotes: data.quotes
                })
            })
    }

    render() {
        return (
            <Fragment>
                <PageTitle title="Quotes" />
                <div className="content">
                    {
                        this.state.quotes === null ? (
                            <h2>Loading...</h2>
                        ) : (
                            this.state.quotes.map((quote, index) => (
                                <p key={index}>{quote.name}</p>
                            ))
                        )
                    }
                </div>
            </Fragment>
        )
    }
}