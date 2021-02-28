import React from 'react';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import { ReactComponent as ArrDown } from '../../assets/images/svg/arrow_drop_down.svg';
import { useSelector, useDispatch } from 'react-redux';

function AdminModal({ delegateShowModal, handlerAdminModal }) {


    const dispatch = useDispatch();

    const { modalShow, } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
    }))


    return (
        <div
            onClick={delegateShowModal}
            className="admin__modal admin-modal">
            <div className="admin-modal__body mainbg">
                <div className="admin-modal__title">
                    Добавить Объект
                <CloseModal
                        onClick={handlerAdminModal}
                        className="admin-modal__close" /></div>
                <div className="admin-modal__type shd">
                    <span>Выберите Тип</span><ArrDown className="admin-modal__svg" />
                    <ul className="admin-modal__dropdown dropdown">
                        <li className="dropdown__item"></li>
                    </ul>
                </div>
                <div className="admin-modal__brand shd">
                    <span>Выберите Бренд</span><ArrDown className="admin-modal__svg" />
                    <ul className="admin-modal__dropdown dropdown">
                        <li className="dropdown__item"></li>
                    </ul>
                </div>
                <div className="admin-modal__object">
                    <input
                        className="admin-modal__input shd"
                        type="text" name="name"
                        placeholder="Введите имя объекта" />
                    <input
                        className="admin-modal__input shd"
                        type="text" name="price"
                        placeholder="Введите цену объекта" />
                    <input
                        className="admin-modal__input shd"
                        type="text" name="oldprice"
                        placeholder="Введите старую цену объекта" />
                    <input
                        className="admin-modal__input shd"
                        type="text" name="description"
                        placeholder="Введите старую цену объекта" />
                    <input
                        className="admin-modal__input shd"
                        type="text" name="material"
                        placeholder="Введите старую цену объекта" />
                    <input
                        className="admin-modal__input shd"
                        type="text" name="size"
                        placeholder="Введите старую цену объекта" />
                    <input
                        className="admin-modal__input"
                        type="file" name="image" />
                </div>

                <button className="admin-modal__btn btn">Добавить</button>
            </div>

        </div>
    )
}

export default AdminModal
