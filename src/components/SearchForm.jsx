import React from 'react';
import { ReactComponent as SearchSvg } from '../assets/images/svg/search-24px.svg'

function SearchForm() {
    return (
        <form className="search__form">
            <input type="text" name="text" placeholder="Поиск по типу" className="search__input" />
            <button className="search__btn">
                <SearchSvg />
            </button>
        </form>
    )
}

export default SearchForm;
