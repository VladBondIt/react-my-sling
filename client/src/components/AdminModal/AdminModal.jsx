import React, { useState, useEffect } from 'react';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import { ReactComponent as ArrDown } from '../../assets/images/svg/arrow_drop_down.svg';
import { useDispatch } from 'react-redux';

function AdminModal({ delegateShowModal, handlerAdminModal, adminTypeModal }) {

    const [activeDropList, setAсtiveDropList] = useState(false)
    const [typesDropDown, setTypesDropDown] = useState([{ id: 1, name: 'type' }, { id: 2, name: 'brand' }])
    const [typesNames, setTesDropDown] = useState(['My Sling', 'Sling with rings'])
    const [brandNames, setpesDropDown] = useState(['Mum`s Era', 'Echidna'])
    const [selectType, setSelectType] = useState('')
    const [selectBrand, setSelectBrand] = useState('')
    const [modalTitle, setModalTitle] = useState('')
    const [bodyClassName, setBodyClassName] = useState("admin-modal__body mainbg")


    const dispatch = useDispatch();

    const handlerCases = () => {
        switch (adminTypeModal) {
            case 0:
                setModalTitle('Добавить Тип')
                setTypesDropDown([{ id: 1, name: 'type' }])
                break;
            case 1:
                setModalTitle('Добавить Бренд')
                setTypesDropDown([{ id: 2, name: 'brand' }])
                break;
            case 2:
                setModalTitle('Добавить Объект')
                setTypesDropDown([{ id: 1, name: 'type' }, { id: 2, name: 'brand' }])
                setBodyClassName("admin-modal__body admin-modal__body_big mainbg")
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        handlerCases()
    }, [])




    return (
        <div
            onClick={delegateShowModal}
            className="admin__modal admin-modal">
            <div className={bodyClassName}>
                <div className="admin-modal__title">
                    {modalTitle}
                    <CloseModal
                        onClick={handlerAdminModal}
                        className="admin-modal__close" />
                </div>
                {typesDropDown.map(({ id, name }) =>
                    <div
                        key={id}
                        onClick={() => {
                            if (!activeDropList) {
                                setAсtiveDropList(id)
                            } else {
                                setAсtiveDropList(false)
                            }
                        }}
                        className="admin-modal__dropdown shd">
                        <div className={activeDropList === id
                            ? "admin-modal__box shd active"
                            : "admin-modal__box shd"}>
                            <span>
                                {name === 'type'
                                    ? selectType
                                        ? selectType
                                        : 'Выберите Тип'
                                    : selectBrand
                                        ? selectBrand
                                        : 'Выберите Бренд'}
                            </span>
                            <ArrDown className="admin-modal__svg" />
                        </div>
                        <ul className={activeDropList === id
                            ? "admin-modal__list mainbg shd active"
                            : "admin-modal__list mainbg shd"}>
                            {
                                name === 'type'
                                    ? typesNames.map((name) =>
                                        <li
                                            onClick={() => {
                                                setSelectType(name)
                                            }}
                                            key={name}
                                            className="admin-modal__item shd eff">{name}</li>)
                                    : brandNames.map((name) =>
                                        <li
                                            onClick={() => {
                                                setSelectBrand(name)
                                            }}
                                            key={name}
                                            className="admin-modal__item shd eff">{name}</li>)
                            }
                        </ul>
                    </div>)}
                {adminTypeModal === 2 ?
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
                        <textarea
                            className="admin-modal__input admin-modal__input_textarea shd"
                            cools="40"
                            name="description"
                            placeholder="Введите описание объекта" />
                        <input
                            className="admin-modal__input shd"
                            type="text" name="material"
                            placeholder="Введите материал объекта" />
                        <input
                            className="admin-modal__input shd"
                            type="text" name="size"
                            placeholder="Введите размер объекта" />
                        <input
                            className="admin-modal__input"
                            type="file" name="image" />
                    </div>
                    : null}

                <button className="admin-modal__btn btn">Добавить</button>
            </div>

        </div>
    )
}

export default AdminModal
