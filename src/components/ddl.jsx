import React, { Component } from 'react';

class DDL extends Component {
    state = {};
    render() {
        const {
            id,
            label,
            name,
            options,
            textProperty,
            valueProperty,
            onChange
        } = this.props;
        return (
            <div className='form-group'>
                <label htmlFor={id}>{label}</label>
                <select
                    name={name}
                    id={id}
                    className='form-control'
                    onChange={onChange}
                >
                    {options.map((option, i) => (
                        <option
                            key={`ddlOption${i}`}
                            value={option[valueProperty]}
                        >
                            {option[textProperty]}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

DDL.defaultProps = {
    textProperty: 'Surname',
    valueProperty: 'Id'
};

export default DDL;
