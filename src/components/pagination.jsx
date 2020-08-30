import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {
    state = {};
    render() {
        const { pageSize, itemsCount, currentPage, onPageChange } = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);
        if (pagesCount === 1) return null;

        const pages = _.range(1, pagesCount + 1);
        return (
            <nav>
                <ul className='pagination pagination-sm'>
                    {pages.map((page, i) => (
                        <li
                            key={`page${page}`}
                            className={
                                page === currentPage
                                    ? 'page-item active'
                                    : 'page-item'
                            }
                        >
                            <button
                                className='page-link'
                                href='#'
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
