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

    getPropertyValidation = ({name, value}) => {
        switch (name) {
            case 'name':
                if(value.trim() === '') return 'Name is required';
                break;
            case 'surname':
                if(value.trim() === '') return 'Surname is required'; 
                break;
            case 'email':
                if(value.trim() === '') return 'E-mail is required'; 
                break;
            case 'telephone':
                if(value.trim() === '') return 'Telephone is required'; 
                break;
            default:
                break;

        }
    }

    handleSubmit = async (e) =>{
        e.preventDefault();

        //const errors = this.validateForm();
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
        //const errorMessage = this.getPropertyValidation(input);

        if(errorMessage)
            errors[input.name] = errorMessage.message;
        else 
            delete errors[input.name];

        const customer = { ...this.state.customer };
        customer[input.name] = input.value;
        
        this.setState({ customer, errors});
    }

    validateForm = () => {
        const errors = {};
        const {customer} = this.state;

        if(customer.name.trim() === '')
            errors.name = "Name is required";

        if(customer.surname.trim() === '')
            errors.surname = "Surname is required";

        if(customer.email.trim() === '')
            errors.email = "E-mail is required";

        if(customer.telephone.trim() === '')
            errors.telephone = "Telephone is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }
}

export default AddCustomer;