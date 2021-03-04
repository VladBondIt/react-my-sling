import React, { useEffect, memo } from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryTypes, } from '../redux/actions/categoryes';
import { setCards } from '../redux/actions/cards';
import Loader from './Loader';
import { setLoading } from '../redux/actions/loader';
import { setSearchChar } from '../redux/actions/search';
import httpService from '../services/httpService';


const Shop = memo(function Shop() {
    const dispatch = useDispatch();

    const { activeTypeItem, cardItems, loaderItems, isLoading, searchChar, typeItems } = useSelector((state) => ({
        activeTypeItem: state.categoryes.activeTypeItem,
        cardItems: state.cards.cardItems,
        typeItems: state.categoryes.typeItems,
        loaderItems: state.loader.loaderItems,
        isLoading: state.loader.isLoading,
        searchChar: state.search.searchChar,
    }))

    // const fetchItems = () => {
    //     if (items.length === 0) {
    //         httpService.getCategoryes('slings').then((res) => {
    //             dispatch(setCategoryes(res));
    //         })
    //     }
    //     dispatch(setLoading(false))
    //     if (cardItems.length === 0) {
    //         dispatch(fetchedCards())
    //     }
    // }

    useEffect(() => {
        httpService.getItems().then((res) => {
            dispatch(setCards(res))
            dispatch(setLoading(false))
        })
        httpService.getTypes().then(res => {
            dispatch(setCategoryTypes(res))
        })
        // fetchItems();
    }, [])

    const onChange = (e) => {
        dispatch(setSearchChar(e.target.value))
    }

    const visibleCards = searchChar !== null
        ? cardItems
            .filter((x) => Object
                .values(x)
                .some((value) => (value + '').toLowerCase().includes(searchChar.toLowerCase())))
        : cardItems;

    return (
        <section className="shop mainbg">
            <div className="container">
                <div className="shop__search search shd">
                    <span className="search__count">
                        Товара найдено:
                        <span className="search__number">
                            {visibleCards.length >= 0 && searchChar !== null
                                ? visibleCards.length
                                : cardItems.length}
                        </span>
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
                                {typeItems
                                    && typeItems.map((CategoryType) =>
                                        <CategoryItem
                                            {...CategoryType}
                                            activeTypeItem={activeTypeItem}
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
})

export default Shop;

