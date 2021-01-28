import React from 'react';
import Card from './Card';
import CategoryItem from './CategoryItem';
import SearchForm from './SearchForm';

const arrItems = ['Май Слинг', "Слинг с кольцом", "Слинг Рюкзак", "Подгузники", "Коляски"]

function Shop() {
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
                                {arrItems.map((CategoryType) => <CategoryItem CategoryType={CategoryType} />)}
                            </ul>
                        </div>
                    </div>
                    <div className="shop__column shop__column_right">
                        <div className="shop__cardbox">
                            <Card />
                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
}

export default Shop

