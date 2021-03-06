import React, { useState } from 'react';

import classes from '../Components/Settings/Setting.module.css';

export const useSetPagePaginator = (
  countUsersSet,
  pageSizeSet,
  pagesPart,
  onCurPageSet,
  currentPageSet,
) => {
  const [pageNumber, setPageNumber] = useState(1);
  // номер стор. i + f
  const countPagesSet = Math.ceil(countUsersSet / pageSizeSet / 100);
  // к-ть стор.= заг. к-ть users поділ. на к-ть users на стор.
  const pagesPartCount = Math.ceil(countPagesSet / pagesPart);
  // заг. к-ть стор. поділити к-ть кноп. на стор.
  const leftBorder = (pageNumber - 1) * pagesPart + 1;
  // ліва границя = номер стор. помнож. на к-ть кноп. на стор.
  const rightBorder = pageNumber * pagesPart;
  // права границя = номер стор. помножити на к-ть кнопок на стор.

  const pagesSet = [];

  for (let i = 1; i <= countPagesSet; i++) {
    pagesSet.push(i);
  }

  const activePagesSet = pagesSet
    .filter(page => page >= leftBorder && page <= rightBorder)
    .map((page, i) => (
      <span
        key={i}
        className={currentPageSet === page ? classes.active : classes.pag}
        onClick={() => {
          onCurPageSet(page);
        }}
      >
        {page}
      </span>
    ));
  const maxPageNumber = pageNumber > 1;
  const handleNextPageNumber = () => setPageNumber(prevPageNumber => prevPageNumber + 1);
  const handlePrevPageNumber = () => setPageNumber(prevPageNumber => prevPageNumber - 1);

  return {
    pagesPartCount,
    pagesSet,
    pageNumber,
    setPageNumber,
    maxPageNumber,
    handlePrevPageNumber,
    handleNextPageNumber,
    activePagesSet,
  };
};
