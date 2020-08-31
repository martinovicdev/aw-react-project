import React, { Component } from 'react';
import '../styles/app.css';

import Customers from './customers';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home-page';
import NavBar from './navbar';
import ShowCustomer from './show-customer';
import ShowParameters from './show-params';
import NotFound from './not-found';
import ProgramaticNavigation from './programatic-navigation';
import AddCustomer from './add-customer';
import EditCustomer from './edit-customer';


class App extends Component {
    state = {
        customers: [],
        currentPage: 1,
        pageSize: 10
    };
    render() {
        const {customers, currentPage, pageSize} = this.state;
        return (
            <React.Fragment>
                <NavBar/>
                <div className='container'>
                    <Switch>
                        <Route path='/customers' render={(props)=>(
                            <Customers 
                                {...props}
                                customers= {customers} 
                                currentPage = {currentPage} 
                                pageSize = {pageSize}
                            />
                            )}
                        />
                        <Route path='/showcustomer/:id/:color?' component={ShowCustomer} />
                        <Route path='/params' component={ShowParameters}/>                      
                        <Route path='/not-found' component={NotFound}/> 
                        <Route path='/prog-nav' component={ProgramaticNavigation} exact/>
                        <Route path='/add-customer' component={AddCustomer} exact/>     
                        <Route path='/edit-customer' component={EditCustomer} exact/>                    
                        <Route path='/' component={HomePage} exact/>
                        
                        <Redirect to='/not-found' />
                    </Switch>               
                </div>
                </React.Fragment>
        );
    }


}

export default App;
