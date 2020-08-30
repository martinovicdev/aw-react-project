import React from 'react';

const TextBox = (props) => {
    const {id, name, type, labelText, value, placeholder,error,onChange} = props;
    return (
            <div className = "form-group">
                    <label htmlFor = {id} style ={{fontWeight: 700}}>{labelText}</label>
                    {error && <span className ='badge-primary ml-2'>{error}</span>}
                    <input  type = {type}
                            name = {name} 
                            id = {id}
                            placeholder = {placeholder}
                            value = {value}
                            className = "form-control"
                            onChange = {onChange}
                    />                       
            </div>
        );
}

TextBox.defaultProps = {
    type: 'text'
}

export default TextBox;