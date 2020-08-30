import React, { Component } from 'react';
import '../styles/app.css';

import Customers from './customers';


class App extends Component {
    
    render() {     
        return (
            <div className='container'>
               <Customers/>
            </div>
        );
    }


}

export default App;
