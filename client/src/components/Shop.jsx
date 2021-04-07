import React, { useEffect, memo, useRef, useState } from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryBrands, setCategoryTypes, } from '../redux/actions/categoryes';
import { setCards, setInfoCards, setTotalCount } from '../redux/actions/cards';
import Loader from './Loader';
import { setLoading } from '../redux/actions/loader';
import { setSearchChar } from '../redux/actions/search';
import BrandItem from './BrandItem';
import Pagination from './Pagination';
import itemService from '../services/itemService';
import typeService from '../services/typeService';
import brandService from '../services/brandService';
import SortPopup from './SortPopup';
import { setSortPopupShow } from '../redux/actions/modal';


const Shop = memo(function Shop() {
    const dispatch = useDispatch();
    const brandBar = useRef()
    const sortBox = useRef()

    const { activeTypeItem, cardItems, loaderItems, limit, totalCount, activePage, activeBrandItem,
        isLoading, typeItems, cardInfos, searchChar, brandItems, sortPopupShow } = useSelector((state) => ({
            ...state.categoryes,
            ...state.modal,
            ...state.cards,
            ...state.limit,
            ...state.loader,
            ...state.search,
        }))

    const [sortName, setSortName] = useState('')
    const fieldsArr = ['Цене', 'Алфавиту']

    useEffect(() => {

        dispatch(setLoading(true))
        dispatch(setSearchChar(''))
        itemService.getInfo().then((res) => {
            dispatch(setInfoCards(res))
        })
        itemService.getItems(activeTypeItem, activeBrandItem, activePage, limit).then((res) => {
            dispatch(setTotalCount(res.count))
            dispatch(setCards(res.rows))
            dispatch(setLoading(false))
        })
        typeService.getTypes().then(res => {
            dispatch(setCategoryTypes(res))
        })
        brandService.getBrand().then(res => {
            dispatch(setCategoryBrands(res))
        })
    }, [dispatch, activePage, activeTypeItem, activeBrandItem, limit])

    const onChange = (e) => {
        dispatch(setSearchChar((e.target.value)))
    }

    const handlerSort = (e) => {

        if (e.target.classList[0] !== 'sort__item') {
            dispatch(setSortPopupShow(!sortPopupShow))
        }
    }

    const visibleCards = searchChar
        ? cardItems
            .filter((x) => {
                const [info] = cardInfos.filter((info) => info.itemId === x.id)
                const result = Object.values({
                    price: x.price,
                    oldprice: x.oldprice,
                    name: x.name.toLowerCase(),
                    size: info.size,
                    material: info.material.toLowerCase()
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
                            {searchChar ? visibleCards.length : totalCount}
                        </span>
                    </span>
                    <SearchForm
                        searchChar={searchChar}
                        onChange={onChange} />
                    <div onClick={handlerSort} className="search__sort">
                        <div ref={sortBox} className="search__box">
                            Сортировать по: <span className="search__type">{sortName}</span>
                        </div>
                        {sortPopupShow && <SortPopup
                            sortName={sortName}
                            fieldsArr={fieldsArr}
                            setSortName={setSortName} />}
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
                        <div ref={brandBar} className="shop__brand brand shd">
                            <div className="brand__title">Выберите Бренд:</div>
                            <ul className="brand__list">
                                {brandItems && brandItems.map((item) =>
                                    <BrandItem key={item.name} {...item} activeBrandItem={activeBrandItem} />
                                )}
                            </ul>
                        </div>
                        <div className="shop__cardbox">
                            {!isLoading
                                ? visibleCards.map((card) =>
                                    <Card
                                        card={card}
                                        key={card.id} />)
                                : loaderItems.map((loader) => <Loader key={loader.id} />)}
                        </div>
                        {!searchChar &&
                            <Pagination
                                limit={limit}
                                brandBar={brandBar}
                                totalCount={totalCount}
                            />}
                    </div>
                </div>
            </div >
        </section>
    )
})

export default Shop;

