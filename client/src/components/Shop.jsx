import React, { useEffect, memo } from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryTypes, } from '../redux/actions/categoryes';
import { setCards, setInfoCards } from '../redux/actions/cards';
import Loader from './Loader';
import { setLoading } from '../redux/actions/loader';
import { setSearchChar } from '../redux/actions/search';
import httpService from '../services/httpService';


const Shop = memo(function Shop() {
    const dispatch = useDispatch();

    const { activeTypeItem, cardItems, loaderItems, isLoading, typeItems, cardInfos, searchChar } = useSelector((state) => ({
        activeTypeItem: state.categoryes.activeTypeItem,
        cardItems: state.cards.cardItems,
        cardInfos: state.cards.cardInfos,
        typeItems: state.categoryes.typeItems,
        loaderItems: state.loader.loaderItems,
        isLoading: state.loader.isLoading,
        searchChar: state.search.searchChar,
    }))

    useEffect(() => {
        httpService.getInfo().then((res) => {
            dispatch(setInfoCards(res))
        })
        httpService.getItems().then((res) => {
            dispatch(setCards(res))
            dispatch(setLoading(false))
        })
        httpService.getTypes().then(res => {
            dispatch(setCategoryTypes(res))
        })
    }, [])

    const onChange = (e) => {
        dispatch(setSearchChar((e.target.value).toLowerCase()))
    }

    const visibleCards = searchChar
        ? cardItems
            .filter((x) => {
                const [info] = cardInfos.filter((info) => info.itemId === x.id)
                const result = Object.values({
                    price: x.price,
                    oldprice: x.oldprice,
                    name: x.name,
                    size: info.size,
                    material: info.material
                }).some((value) => {
                    return (value + '').toLowerCase().includes(searchChar.toLowerCase())
                })
                return result && x
            })
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

