import React from 'react';

import {useSetPagePaginator} from "../../Hook/useSetPagePaginator";

import classes from "./Setting.module.css";

const SetPage = ({
                     countUsersSet, pageSizeSet,
                     currentPageSet, onCurPageSet, pagesPart = 10,
                 }) => {
    // const countPagesSet = Math.ceil((countUsersSet / pageSizeSet) / 100)
    // к-ть стор.= заг. к-ть users поділ. на к-ть users на стор.
    // const pagesSet = [];
    //
    // for (let i = 1; i <= countPagesSet; i++) {
    //     pagesSet.push(i)
    // }
    //
    //     const pagesPartCount = Math.ceil(countPagesSet / pagesPart) //
    //     заг. к-ть стор. поділити к-ть кноп. на стор.
    //     const [pageNumber, setPageNumber] = useState(1)
    // номер стор. i + f
    //     const leftBorder = (pageNumber - 1) * pagesPart + 1
    // ліва границя = номер стор. помнож. на к-ть кноп. на стор.
    //     const rightBorder = pageNumber * pagesPart
    // права границя = номер стор. помножити на к-ть кнопок на стор.
    const {
        pagesPartCount, pageNumber, maxPageNumber,
        handlePrevPageNumber, handleNextPageNumber, activePagesSet
    } =
        useSetPagePaginator(countUsersSet, pageSizeSet,
            pagesPart, onCurPageSet, currentPageSet)

    return (
        <div className={classes.marg}>
            {maxPageNumber &&
                <button onClick={handlePrevPageNumber}>back</button>}

            {activePagesSet
                // pagesSet
                //     .filter(p => p >= leftBorder && p <= rightBorder)
                //
                //     .map((p, i) => {
                //         return <span onClick={(e) => {
                //             onCurPageSet(p)
                //         }} key={i} className={currentPageSet === p
                //             ? classes.active
                //             : classes.pag}>{p}</span>
                //     })
            }
            {pagesPartCount > pageNumber &&
                <button onClick={handleNextPageNumber}>forward</button>}
        </div>
    )
}

export default SetPage