import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomersSubmenu = (props) => {
    return ( <div>
        <NavLink to="/add-customer" exact>Add customer</NavLink>
        <NavLink to="/edit-customer">Edit customer</NavLink>
    </div> );
}
 
export default CustomersSubmenu;