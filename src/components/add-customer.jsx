import React, { Component } from 'react'
import TextBox from './text-box'
import {validateFormWithYup, getPropertyValidationErrorWithYup} from '../services/validationYup'
import axios from 'axios';

class AddCustomer extends Component {
    state ={
        customer:{
            name:'',
            surname:'',
            email:'',
            telephone:''
        },
        errors:{}
    }

    render() {

        const {errors} =this.state;
        return (
            <div className="add-customer">
                <h1>Add customer</h1>
                <hr/>
                <div className = "jumbotron">
                    <form onSubmit={this.handleSubmit}>
                        <TextBox 
                            labelText = "First Name" 
                            id= "name" 
                            name ="name" 
                            placeholder = "Enter first name..."
                            error = {errors.name}
                            onChange={this.handleChange}/>
                        <TextBox 
                            labelText = "Surname" 
                            id= "surname" 
                            name ="surname" 
                            placeholder = "Enter  last name..."
                            error = {errors.surname}
                            onChange={this.handleChange}/>
                        <TextBox 
                            labelText = "E-mail" 
                            id= "email" 
                            name ="email" 
                            placeholder = "Enter a valid e-mail address..."
                            error = {errors.email}
                            onChange={this.handleChange}/>
                        <TextBox 
                            labelText = "Telephone" 
                            id= "telephone" 
                            name ="telephone" 
                            placeholder = "Enter a telephone number..."
                            error = {errors.telephone}
                            onChange={this.handleChange}/>

                        <button type ="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        )
    }

    handleSubmit = async (e) =>{
        e.preventDefault();

        const errors = await validateFormWithYup(this.state.customer);
        this.setState({ errors:errors || {} });
        if(errors) return;

        var data = JSON.stringify({"Name" : this.state.customer.name,"Surname": this.state.customer.surname, "Email": this.state.customer.email,"Telephone": this.state.customer.telephone,"CityId":1});

        var config = {
        method: 'post',
        url: 'http://www.fulek.com/nks/api/aw/addcustomer',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    handleChange = async ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = await getPropertyValidationErrorWithYup(input);

        if(errorMessage)
            errors[input.name] = errorMessage.message;
        else 
            delete errors[input.name];

        const customer = { ...this.state.customer };
        customer[input.name] = input.value;
        
        this.setState({ customer, errors});
    }

}

export default AddCustomer;