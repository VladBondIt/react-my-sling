import React, { useEffect, memo, useRef } from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryBrands, setCategoryTypes, } from '../redux/actions/categoryes';
import { setCardLimit, setCards, setInfoCards, setTotalCount } from '../redux/actions/cards';
import Loader from './Loader';
import { setLoading } from '../redux/actions/loader';
import { setSearchChar } from '../redux/actions/search';
import httpService from '../services/httpService';
import BrandItem from './BrandItem';
import Pagination from './Pagination';


const Shop = memo(function Shop() {
    const dispatch = useDispatch();
    const brandBar = useRef()

    const { activeTypeItem, cardItems, loaderItems, limit, totalCount, activePage, activeBrandItem,
        isLoading, typeItems, cardInfos, searchChar, brandItems } = useSelector((state) => ({
            activeTypeItem: state.categoryes.activeTypeItem,
            cardItems: state.cards.cardItems,
            cardInfos: state.cards.cardInfos,
            totalCount: state.cards.totalCount,
            activePage: state.cards.activePage,
            limit: state.cards.limit,
            typeItems: state.categoryes.typeItems,
            brandItems: state.categoryes.brandItems,
            activeBrandItem: state.categoryes.activeBrandItem,
            loaderItems: state.loader.loaderItems,
            isLoading: state.loader.isLoading,
            searchChar: state.search.searchChar,
        }))

    useEffect(() => {

        httpService.getLimit().then((res) => dispatch(setCardLimit(res.limit)))

        dispatch(setLoading(true))
        dispatch(setSearchChar(''))
        httpService.getInfo().then((res) => {
            dispatch(setInfoCards(res))
        })
        httpService.getItems(activeTypeItem, activeBrandItem, activePage, limit).then((res) => {
            dispatch(setTotalCount(res.count))
            dispatch(setCards(res.rows))
            dispatch(setLoading(false))
        })
        httpService.getTypes().then(res => {
            dispatch(setCategoryTypes(res))
        })
        httpService.getBrand().then(res => {
            dispatch(setCategoryBrands(res))
        })
    }, [activePage, activeTypeItem, activeBrandItem, limit])

    const onChange = (e) => {
        dispatch(setSearchChar((e.target.value)))
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
                                        {...card}
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

