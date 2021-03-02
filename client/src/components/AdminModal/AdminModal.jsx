import React, { useState, useEffect } from 'react';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import { ReactComponent as ArrDown } from '../../assets/images/svg/arrow_drop_down.svg';
import httpService from '../../services/httpService'

function AdminModal({ delegateShowModal, handlerAdminModal, adminTypeModal }) {

    const [activeDropList, setAсtiveDropList] = useState(false)
    const [typesDropDown, setTypesDropDown] = useState([{ id: 1, name: 'type' }, { id: 2, name: 'brand' }])
    const [typesNames, setTypesNames] = useState(['Sling package', 'My Sling', 'Sling with rings'])
    const [brandNames, setBrandNames] = useState(['Mum`s Era', 'Echidna'])
    const [selectType, setSelectType] = useState('')
    const [selectBrand, setSelectBrand] = useState('')
    const [modalTitle, setModalTitle] = useState('')
    const [bodyClassName, setBodyClassName] = useState("admin-modal__body mainbg")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [oldprice, setOldprice] = useState("")
    const [description, setDescription] = useState("")
    const [material, setMaterial] = useState("")
    const [size, setSize] = useState("")
    const [img, setImg] = useState("")
    const [brandId, setBrandId] = useState("")
    const [typeId, setTypeId] = useState("")

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
    // console.log({ brandId, typeId });

    useEffect(() => {
        httpService.getTypes().then(res => setTypesNames(res))
        httpService.getBrand().then(res => setBrandNames(res))
        handlerCases()
    }, [])

    const selectedFile = (e) => {
        setImg(e.target.files[0])
    }

    const handlerSubmit = () => {

        // const obj = {
        //     name,
        //     price,
        //     oldprice,
        //     img,
        //     brandId,
        //     typeId,
        //     info: [{
        //         description,
        //         material,
        //         size,
        //     }]
        // }
        const info = [{
            description,
            material,
            size,
        }]

        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', `${Number(price)}`)
        formData.append('oldprice', `${Number(oldprice)}`)
        formData.append('img', img)
        formData.append('brandId', `${brandId}`)
        formData.append('typeId', `${typeId}`)
        formData.append('info', JSON.stringify(info))


        httpService.createItem(formData).then(res => console.log(res))

        handlerAdminModal()
    }


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
                        <div key={id + name} className={activeDropList === id
                            ? "admin-modal__box shd active"
                            : "admin-modal__box shd"}>
                            {name === 'type'
                                ? selectType
                                    ? selectType
                                    : 'Выберите Тип'
                                : selectBrand
                                    ? selectBrand
                                    : 'Выберите Бренд'}
                            <ArrDown key={name + id} className="admin-modal__svg" />
                        </div>
                        <ul key={name} className={activeDropList === id
                            ? "admin-modal__list mainbg shd active"
                            : "admin-modal__list mainbg shd"}>
                            {activeDropList
                                ?
                                name === 'type'
                                    ? typesNames.map((obj) =>
                                        <li
                                            onClick={() => {
                                                setTypeId(obj.id)
                                                setSelectType(obj.name)
                                            }}
                                            key={obj.name}
                                            className="admin-modal__item shd eff">{obj.name}</li>)
                                    : brandNames.map((obj) =>
                                        <li
                                            onClick={() => {
                                                setBrandId(obj.id)
                                                setSelectBrand(obj.name)
                                            }}
                                            key={obj.name}
                                            className="admin-modal__item shd eff">{obj.name}</li>)
                                : null
                            }
                        </ul>
                    </div>)}
                {adminTypeModal === 2 ?
                    <div className="admin-modal__object">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className="admin-modal__input shd"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Введите имя объекта" />
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            className="admin-modal__input shd"
                            type="text"
                            name="price"
                            value={price}
                            placeholder="Введите цену объекта" />
                        <input
                            onChange={(e) => setOldprice(e.target.value)}
                            className="admin-modal__input shd"
                            type="text"
                            value={oldprice}
                            name="oldprice"
                            placeholder="Введите старую цену объекта" />
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            className="admin-modal__input admin-modal__input_textarea shd"
                            cools="40"
                            name="description"
                            value={description}
                            placeholder="Введите описание объекта" />
                        <input
                            onChange={(e) => setMaterial(e.target.value)}
                            className="admin-modal__input shd"
                            type="text"
                            name="material"
                            value={material}
                            placeholder="Введите материал объекта" />
                        <input
                            onChange={(e) => setSize(e.target.value)}
                            className="admin-modal__input shd"
                            type="text"
                            value={size}
                            name="size"
                            placeholder="Введите размер объекта" />
                        <input
                            onChange={selectedFile}
                            className="admin-modal__input"
                            type="file" name="image" />
                    </div>
                    : null}

                <button
                    onClick={handlerSubmit}
                    className="admin-modal__btn btn">Добавить</button>
            </div>

        </div>
    )
}

export default AdminModal
