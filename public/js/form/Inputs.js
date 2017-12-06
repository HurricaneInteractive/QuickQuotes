import React from 'react'

export const Input = (props) => {

    let hasContent = false;
    props.input.value != '' ? hasContent = true : hasContent = false

    const changeValue = (e) => {
        props.onChangeEvent(e)
    }

    return (
        <div className={`form-control ${ typeof props.input.control_class != 'undefined' ? props.input.control_class : '' }`}>
            <input 
                type={props.input.type} 
                name={props.input.name} 
                id={props.input.name} 
                value={props.input.value} 
                onChange={(e) => changeValue(e)}
                className={`${ hasContent === true ? 'not-empty' : '' }`}
            />
            <label>{props.input.name}</label>
        </div>
    )
}

export const SubmitGroup = (props) => {
    return (
        <div className="form-control form-actions col-100">
            <input 
                type="submit" 
                value={props.title} 
                className={`btn ${ typeof props.additionalClasses != 'undefined' ? String(props.additionalClasses) : '' }`} 
            />
        </div>
    )
}

export const MultipleInputs = (props) => {
    
    const inputOnChange = (e) => {
        props.onChangeFunc(e)
    }

    return props.inputs.map((input, index) => (
        <Input 
            key={index} 
            input={input} 
            onChangeEvent={(e) => inputOnChange(e)} 
        />
    ))
}