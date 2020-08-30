import React from 'react';

const ShowCustomer = (props) => {

    const style = {
        color: props.match.params.color || 'white'
    };

    return (  
    <div className="showCustomers">
        <h1>
            <span className ='badge badge-primary'>
                Show customer id: <span className = 'badge badge-dark' style = {style}>
                {props.match.params.id}
                </span>
            </span>
        </h1>

    </div>  
    );
}
 
export default ShowCustomer;