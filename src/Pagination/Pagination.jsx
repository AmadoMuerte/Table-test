import React from 'react';
import './Pagination.css';

function Pagination(props) {

    let {tableStringPerPage, totalTableString,
        paginate, currentPage} = props

    //расчет страниц
    let countPages = () => {
        let pageNumbers = [];
        let pages = Math.ceil(totalTableString / tableStringPerPage);
        for (let i = 1; i <= (pages); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    let listPage = () => {
        let pageNumbers = countPages();
        let classes = 'pagination__item';

       return pageNumbers.map((number) => {
           if (number === currentPage) {
               classes += ' pagination__item-click';
           } else  {
               classes = 'pagination__item';
           }
           return (
                <div
                   onClick={() => paginate(number)}
                   className={classes}
                   key={number}
                >
                   {number}
               </div>)
       })
    }

    return (
        <div className={'pagination'}>
            {listPage()}
        </div>

    );
}

export default Pagination;