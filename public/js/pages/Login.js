import React, { Component, Fragment } from 'react'

import { PageTitle } from '../globals/UI'
import { MultipleInputs, SubmitGroup } from '../form/Inputs'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }

        this.authenticateUser = this.authenticateUser.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.renderFormInputs = this.renderFormInputs.bind(this)
    }

    authenticateUser(event) {
        event.preventDefault()

    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderFormInputs() {
        let formInputs = [
            {
                'name': 'email',
                'value': this.state.email,
                'type': 'text',
                'control_class': 'col-50'
            },
            {
                'name': 'password',
                'value': this.state.password,
                'type': 'password',
                'control_class': 'col-50'
            }
        ]
        return <MultipleInputs inputs={formInputs} onChangeFunc={(e) => (this.onInputChange(e))} />
    }

    render() {
        return (
            <Fragment>
                <PageTitle title="Login" />
                <div className="content">
                    <div className="form-group">
                        <form onSubmit={(event) => (this.authenticateUser(event))} className="row">
                            { this.renderFormInputs() }
                            <SubmitGroup title="Login" />
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}