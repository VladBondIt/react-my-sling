import React from 'react';
import { ReactComponent as SearchSvg } from '../assets/images/svg/search-24px.svg'

function SearchForm({ onChange }) {


    const handlerChange = (e) => {
        onChange(e);
    }


    return (
        <div className="search__form">
            <input
                onChange={handlerChange}
                type="text"
                name="text"
                placeholder="Поиск в категории, описание, размер, материал"
                className="search__input" />
            <div className="search__btn">
                <SearchSvg />
            </div>
        </div>
    )
}

export default SearchForm;
