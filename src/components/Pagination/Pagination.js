import React from 'react';
import {getNumPages} from "../../library/library";
import classes from './styles.module.css'

const Pagination = ({paginate, setPaginate, showToDoListItemsLength}) => {

    const lastPage = Math.ceil(showToDoListItemsLength / paginate.limit)


    const setPage = (page) => {
        return () => {
            setPaginate(state => ({...state, page}))
        }
    }

    return (
        <div className={classes.pagination}>
            {paginate.page > 1 &&
                <button onClick={setPage(paginate.page - 1)}>
                    <i className="fas fa-arrow-left"/>
                </button>
            }

            {
                getNumPages(lastPage, paginate.page).map(num_page =>
                    <button
                        key={num_page}
                        onClick={setPage(num_page)}
                    >
                        {num_page}
                    </button>
                )
            }

            {paginate.page < lastPage &&
                <button onClick={setPage(paginate.page + 1)}>
                    <i className="fas fa-arrow-right"/>
                </button>
            }
        </div>
    );
};

export default Pagination;