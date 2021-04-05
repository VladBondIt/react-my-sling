import React from 'react'
import SortItem from './SortItem'

function SortPopup({ fieldsArr, setSortName, sortName }) {

    return (
        <ul className="sort">
            {fieldsArr.map((value) =>
                <SortItem
                    key={value} value={value} setSortName={setSortName} sortName={sortName} />)
            }
        </ul >
    )
}

export default SortPopup
