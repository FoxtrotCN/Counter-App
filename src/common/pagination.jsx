import React from "react";
import ProTypes from 'prop-types';
import _ from 'lodash'; // underscore

const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page =>
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link"
                           onClick={() => onPageChange(page)}
                           style={{cursor: "pointer"}}>
                            {page}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: ProTypes.number.isRequired,
    pageSize: ProTypes.number.isRequired,
    currentPage: ProTypes.number.isRequired,
    onPageChange: ProTypes.func.isRequired
};

export default Pagination