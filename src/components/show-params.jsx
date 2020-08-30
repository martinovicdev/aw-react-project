import React from 'react';
import querryString from 'query-string'


const ShowParameters = (props) => {
    const paramsObj = querryString.parse(props.location.search);       
    return ( <div>
        <h1>Show Parameters</h1>
        <hr/>
        {renderParams(paramsObj)}
    </div> );
}

const renderParams = (paramsObj) => {
    const li = [];
    for (const key in paramsObj) {
        const element = paramsObj[key];   
        li.push(<li key = {key}>{key} - {element}</li>)    
    }

    return <ul>{li}</ul>;
}

export default ShowParameters;