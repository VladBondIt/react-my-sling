import React, { useEffect, useCallback } from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryes } from '../redux/actions/categoryes';
import { fetchedCards } from '../redux/actions/cards';
import Loader from './Loader';
import { setLoading } from '../redux/actions/loader';
import { setSearchChar } from '../redux/actions/search';


function Shop() {
    const dispatch = useDispatch();

    const { items, activeItem, cardItems, loaderItems, isLoading, searchChar, } = useSelector((state) => ({
        items: state.categoryes.items,
        activeItem: state.categoryes.activeItem,
        cardItems: state.cards.cardItems,
        loaderItems: state.loader.loaderItems,
        isLoading: state.loader.isLoading,
        searchChar: state.search.searchChar,
    }))

    const onSetCategoryes = useCallback(async () => {
        const apiUrl = 'https://my-json-server.typicode.com/VladBondIt/FakeDBjson/slings';

        const res = await fetch(`${apiUrl}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${apiUrl}` +
                `, received ${res.status}`);
        }

        const data = await res.json();


        dispatch(setCategoryes(
            [...new Map(data.map(obj => [obj["category"], obj])).values()]
        ));
        dispatch(setLoading(false))
    }, []);



    useEffect(() => {
        onSetCategoryes()
        dispatch(fetchedCards())
    }, [])

    const onChange = (e) => {
        dispatch(setSearchChar(e.target.value))
    }


    const visibleCards = searchChar !== null
        ? cardItems
            .filter((x) => Object
                .values(x)
                .some((value) => (value + '').toLowerCase().includes(searchChar)))
        : cardItems;



    return (
        <section className="shop">
            <div className="container">
                <div className="shop__search search shd">
                    <span className="search__count">
                        Товара найдено: {visibleCards.length > 0 ? visibleCards.length : cardItems.length}
                    </span>
                    <SearchForm
                        onChange={onChange} />
                    <div className="search__sort">
                        Сортировать по: <span className="search__type">Цене</span>
                    </div>
                </div>
                <div className="shop__content">
                    <div className="shop__column shop__column_left">
                        <div className="shop__category category shd">
                            <span className="category__title">Выберите тип товара</span>
                            <ul className="category__list">
                                {items
                                    && items.map((CategoryType) =>
                                        <CategoryItem
                                            {...CategoryType}
                                            activeItem={activeItem}
                                            key={CategoryType.id} />)}
                            </ul>
                        </div>
                    </div>
                    <div className="shop__column shop__column_right">
                        <div className="shop__cardbox">
                            {!isLoading
                                ? visibleCards.map((card) =>
                                    <Card
                                        {...card}
                                        key={card.id} />)
                                : loaderItems.map((loader) => <Loader key={loader.id} />)}


                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
}

export default Shop

