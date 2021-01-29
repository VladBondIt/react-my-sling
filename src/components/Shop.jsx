import React, { useEffect, useCallback } from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryes } from '../redux/actions/categoryes';


function Shop() {
    const dispatch = useDispatch();

    const { items, activeItem, cardItems } = useSelector((state) => ({
        items: state.categoryes.items,
        activeItem: state.categoryes.activeItem,
        cardItems: state.cards.cardItems
    }))
    console.log(cardItems);

    const onSetCategory = useCallback(async () => {
        const apiUrl = 'http://localhost:3001/slings';

        const res = await fetch(`${apiUrl}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${apiUrl}` +
                `, received ${res.status}`);
        }

        const data = await res.json();

        dispatch(setCategoryes(
            [...new Set(data.map((x) => x.category))]
                .map((z, i) => ({ category: z, id: i + 1 }))
        ));
    }, []);



    useEffect(() => {
        onSetCategory()
    }, [])

    return (
        <section className="shop">
            <div className="container">
                <div className="shop__search search shd">
                    <span className="search__count">
                        Товара найдено: 50
                    </span>
                    <SearchForm />
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
                            {cardItems && cardItems.map((card) => <Card {...card} key={card.id} />)}
                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
}

export default Shop

