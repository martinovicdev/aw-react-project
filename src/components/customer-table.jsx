import React, { Component } from 'react';

class CustomerTable extends Component {
    state = {};
    render() {
        const { customers, customersCount, onDelete } = this.props;
        return (
            <div className='customerTable'>
                <table
                    className='table table-striped'
                    style={{ fontSize: '.75em' }}
                >
                    <thead className='thead-dark'>
                        <tr>
                            <th colSpan='5'>
                                {customersCount === 0 && (
                                    <span className='badge badge-dark'>
                                        No customers...
                                    </span>
                                )}
                                {customersCount > 0 && (
                                    <React.Fragment>
                                        <span>Customers count:</span>
                                        <span
                                            className='badge badge-primary ml-2'
                                            style={{ fontSize: '1.5em' }}
                                        >
                                            {customersCount}
                                        </span>
                                    </React.Fragment>
                                )}
                            </th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>E-mail</th>
                            <th>Telephone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((c) => (
                            <tr key={c.Id}>
                                <td className='align-middle'>{c.Name}</td>
                                <td className='align-middle'>{c.Surname}</td>
                                <td className='align-middle'>
                                    <a href={`mailto:${c.Email}`}>{c.Email}</a>
                                </td>
                                <td className='align-middle'>{c.Telephone}</td>
                                <td className='align-middle'>
                                    <button
                                        className='btn btn-danger btn-sm'
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    `Delete ${c.Name} ${c.Surname}`
                                                )
                                            )
                                                onDelete(c.Id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerTable;
