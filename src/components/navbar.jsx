import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../styles/navbar.css'
import CustomersSubmenu from './customers-submenu';

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <NavLink to="/" exact>Home Page</NavLink>
                <NavLink to="/customers">Customers</NavLink>
            </div>

            <div>
               <Route path = '/customers' component = {CustomersSubmenu}></Route> 
            </div>

        </nav>
     );
}
 
export default NavBar;