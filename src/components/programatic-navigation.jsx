import React from 'react';

const ProgramaticNavigation = (props) => {
    return ( <div style ={{marginTop: '2em'}}>
        <button className = 'btn btn-primary btn-lg' onClick = {() => handlePush(props)}>
            Customers - push()
        </button>
        
        <button className = 'btn btn-warning btn-lg' onClick = {() => handleReplace(props)}>
            Customers - replace()
        </button>
    </div> );
}

const handlePush = props =>{
    props.history.push('/customers');
}

const handleReplace = props =>{
    props.history.replace('/customers');
}

export default ProgramaticNavigation;