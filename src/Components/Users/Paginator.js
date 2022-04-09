import React from 'react';
import PropTypes from 'prop-types';

import classes from './pagination.module.css';
import { UsePaginator } from '../../Hook/usePaginator';

const Paginator = ({
  currentPage,
  onChangePage,
  totalUsersCount,
  pageSize,
  pageNumberSizes = 10,
}) => {
  const {
    pageCountSize,
    activePage,
    pageNumber,
    prevPageNumber,
    nextPageNumber,
    prevNumber,
  } = UsePaginator(currentPage, onChangePage, totalUsersCount, pageSize, pageNumberSizes);

  // const pageCount = Math.ceil((totalUsersCount/pageSize))
  // const  pages = [];
  // for (let i=1;  i <= pageCount; i++ ){
  //     pages.push(i);
  // }
  // const pageCountSize = Math.ceil(pageCount/pageNumberSizes);
  //   /10 = pageNumberSizes
  // const [pageNumber, setPageNumber] = useState(1);
  // const leftPortionPageNumber = (pageNumber-1) * pageNumberSizes + 1;
  // const rightPortionPageNumber = pageNumber * pageNumberSizes;
  // const prevPageNumber = () => setPageNumber(pageNumber-1);
  // const nextPageNumber = () => setPageNumber(pageNumber + 1);
  // const prevNumber = pageNumber > 1;
  // const activePage = pages
  //     .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
  //     .map((p) => {
  //   return <span className={  currentPage === p ?
  //   classes.selectedPage : classes.pageNumber }
  //             // [classes.selectedPage] : currentPage === p},
  //             //     classes.pageNumber) }
  //                      key={p}
  //                      onClick={(e) => {
  //                          onChangePage(p);
  //                      }} >{p}</span>
  //     });

  return (
    <div className={classes.paginator}>
      {prevNumber && <button onClick={prevPageNumber}>PREV</button>}
      {activePage}
      {/* {pages */}
      {/*    .filter(p => p >= leftPortionPageNumber
       && p <= rightPortionPageNumber) */}
      {/*    .map((p) => { */}
      {/*        return <span className={  currentPage === p ?
       classes.selectedPage : classes.pageNumber } */}
      {/*        // [classes.selectedPage] : currentPage === p}, */}
      {/*        //     classes.pageNumber) } */}
      {/*                  key={p} */}
      {/*                  onClick={(e) => { */}
      {/*                      onChangePage(p); */}
      {/*                  }} >{p}</span> */}
      {/*        })} */}
      {pageCountSize > pageNumber ? <button onClick={nextPageNumber}>NEXT</button> : null}
    </div>
  );

  //  return  (
  //          <div className={classes.pagesNum}>
  //             { pages.map((p ,i) => {
  //
  //   return  <span key={i} className={ currentPage === p
  //   ?  classes.active : classes.pageNum }
  //    onClick={(e) =>{onChangePage(p)}}> {p} </span>}) }
  //
  //         </div>
  // )
};
Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumberSizes: PropTypes.number.isRequired,
};

export default Paginator;
