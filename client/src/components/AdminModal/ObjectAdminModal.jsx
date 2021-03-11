import React from 'react'
import { ReactComponent as ArrDown } from '../../assets/images/svg/arrow_drop_down.svg';
import ModalFileInput from './ModalFileInput';
import ModalInput from './ModalInput';

function ObjectAdminModal({ typesDropDown, activeDropList, setAсtiveDropList,
    selectType, selectedSideFiles,
    selectBrand, typesNames, setTypeId, setSelectType, brandNames,
    setBrandId, setSelectBrand, objProps, selectedFile }) {

    const { name, setName, price, setPrice, oldprice, setOldprice,
        description, setDescription, material, setMaterial, size, setSize, } = objProps;

    const inputsArr = [
        { type: "text", name: "name", value: name, callback: setName, placeholder: "Введите имя объекта" },
        { type: "number", name: "price", value: price, callback: setPrice, placeholder: "Введите цену объекта" },
        { type: "number", name: "oldprice", value: oldprice, callback: setOldprice, placeholder: "Введите старую цену объекта" },
        { type: "text", name: "material", value: material, callback: setMaterial, placeholder: "Введите материал объекта" },
        { type: "number", name: "size", value: size, callback: setSize, placeholder: "Введите размер объекта" },
    ]

    const fileInputsArr = [
        { callback: selectedFile, label: "основное", name: "image" },
        { callback: selectedSideFiles, label: "2 дополнительных", name: "images", multiple: true },
    ]


    return (
        <div className="admin-modal__object">
            {typesDropDown && typesDropDown.map(({ id, name }) =>
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
                    <div
                        key={id + name}
                        className={activeDropList === id
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
                    <ul
                        key={name}
                        className={activeDropList === id
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
            {inputsArr.map(({ type, name, value, callback, placeholder }) =>
                <ModalInput
                    key={name}
                    type={type}
                    name={name}
                    value={value}
                    callback={callback}
                    placeholder={placeholder}
                />)}
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="admin-modal__input admin-modal__input_textarea shd"
                cools="40"
                name="description"
                value={description}
                placeholder="Введите описание объекта" />
            {fileInputsArr.map(({ callback, label, name, multiple }) =>
                <ModalFileInput
                    key={label}
                    callback={callback}
                    label={label}
                    name={name}
                    multiple={multiple}
                />)}
        </div>
    )
}

export default ObjectAdminModal
