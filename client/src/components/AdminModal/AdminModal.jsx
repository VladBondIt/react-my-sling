import React, { useState, useEffect } from 'react';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import httpService from '../../services/httpService'
import ModalInput from './ModalInput';
import ObjectAdminModal from './ObjectAdminModal';

function AdminModal({ delegateShowModal, handlerAdminModal, adminTypeModal }) {

    const [activeDropList, setAсtiveDropList] = useState(false)
    const [typesDropDown, setTypesDropDown] = useState([{ id: 1, name: 'type' }, { id: 2, name: 'brand' }])
    const [typesNames, setTypesNames] = useState('')
    const [brandNames, setBrandNames] = useState('')
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
    const [mainImg, setMainImg] = useState("")
    const [sideImgs, setSideImgs] = useState("")
    const [brandId, setBrandId] = useState("")
    const [typeId, setTypeId] = useState("")
    const [addedType, setAddedType] = useState("")
    const [addedBrand, setAddedBrand] = useState("")

    let visibleBody = null;

    const obj = {
        name,
        setName,
        price,
        setPrice,
        oldprice,
        setOldprice,
        description,
        setDescription,
        material,
        setMaterial,
        size,
        setSize,
    }

    useEffect(() => {

        httpService.getTypes().then(res => setTypesNames(res))
        httpService.getBrand().then(res => setBrandNames(res))

        switch (adminTypeModal) {
            case 0:
                setModalTitle('Добавить Тип')
                break;
            case 1:
                setModalTitle('Добавить Бренд')
                break;
            case 2:
                setModalTitle('Добавить Объект')
                setBodyClassName("admin-modal__body admin-modal__body_big mainbg")
                break;
            default:
                break;
        }
    }, [adminTypeModal])

    const selectedFile = (e) => {
        setMainImg(e.target.files[0])
    }


    const selectedSideFiles = (e) => {
        setSideImgs([
            { name: "firstSideImg", file: e.target.files[0] },
            { name: "secondSideImg", file: e.target.files[0] },
            { name: "thirdSideImg", file: e.target.files[0] },
        ])
    }


    const handlerSubmit = () => {
        const info = [{
            description,
            material,
            size,
        }]

        const formData = new FormData();
        switch (adminTypeModal) {
            case 0:
                httpService.createType(addedType).then(res => console.log(res))
                break;
            case 1:
                httpService.createBrand(addedBrand).then(res => console.log(res))
                break;
            case 2:
                formData.append('name', name)
                formData.append('price', `${Number(price)}`)
                formData.append('oldprice', `${Number(oldprice)}`)
                formData.append('img', mainImg)
                for (const { name, file } of sideImgs) {
                    formData.append(name, file)
                }
                formData.append('brandId', `${brandId}`)
                formData.append('typeId', `${typeId}`)
                formData.append('info', JSON.stringify(info))

                for (var pair of formData.values()) {
                    console.log(pair);
                }

                httpService.createItem(formData).then(res => console.log(res))
                break;

            default:
                break;
        }


        handlerAdminModal()
    }

    switch (adminTypeModal) {
        case 0:
            visibleBody = <ModalInput
                value={addedType}
                callback={setAddedType}
                type={"text"}
                name={"type"}
                placeholder={"Введите Тип"}
            />
            break;
        case 1:
            visibleBody = <ModalInput
                value={addedBrand}
                callback={setAddedBrand}
                type={"text"}
                name={"brand"}
                placeholder={"Введите Бренд"}
            />
            break;
        case 2:
            visibleBody = <ObjectAdminModal
                typesDropDown={typesDropDown}
                activeDropList={activeDropList}
                setAсtiveDropList={setAсtiveDropList}
                selectType={selectType}
                selectBrand={selectBrand}
                typesNames={typesNames}
                setTypeId={setTypeId}
                setSelectType={setSelectType}
                brandNames={brandNames}
                setBrandId={setBrandId}
                setSelectBrand={setSelectBrand}
                obj={obj}
                selectedFile={selectedFile}
                selectedSideFiles={selectedSideFiles}
            />
            break;
        default:
            break;
    }
    // console.log({ brandId, typeId });


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
                {visibleBody}
                <button
                    onClick={handlerSubmit}
                    className="admin-modal__btn btn">Добавить</button>
            </div>

        </div>
    )
}

export default AdminModal
