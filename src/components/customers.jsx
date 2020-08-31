import React, { Component } from 'react';
import axios from 'axios';
import CustomerTable from './customer-table';
import Pagination from './pagination';
import DDL from './ddl';
import { paginate } from '../services/paginate';

class Customers extends Component {
    state = {
        customers: this.props.customers,
        currentPage: this.props.currentPage,
        pageSize: this.props.pageSize
    };
    render() { 
        const { customers: allCustomers, currentPage, pageSize } = this.state;
        const customers = paginate(allCustomers, currentPage, pageSize);
        return ( 
            <div>
                <h1>Customers</h1>
                <DDL
                    options={allCustomers}
                    label='Customer Surnames'
                    id='ddlSurnames'
                    name='Surname'
                    onChange={this.handleDDLchange}
                />
                <hr />
                <Pagination
                    pageSize={pageSize}
                    itemsCount={allCustomers.length}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />

                <CustomerTable
                    customersCount={allCustomers.length}
                    customers={customers}
                    onDelete={this.handleDelete}
                />
            </div>
         );
    }

    componentDidMount() {
        axios.get(`http://www.fulek.com/nks/api/aw/last200customers`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
    }

    handleDelete = (customerId) => {
        var data = JSON.stringify({"Id":customerId});

        var config = {
        method: 'post',
        url: 'http://www.fulek.com/nks/api/aw/deletecustomer',
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

        console.log(customerId);
        const customers = this.state.customers.filter(
            (c) => c.Id !== customerId
        );
        this.setState({ customers });
    };

    handlePageChange = (page) => {
        console.log('page change', page);
        const currentPage = page;
        this.setState({ currentPage });
    };

    handleDDLchange = ({ target }) => {
        console.log(target.value);
    };
}
 
export default Customers;