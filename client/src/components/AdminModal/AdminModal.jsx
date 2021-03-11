import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseModal } from '../../assets/images/svg/clear-single.svg';
import { setCardLimit } from '../../redux/actions/cards';
import httpService from '../../services/httpService'
import ModalInput from './ModalInput';
import ObjectAdminModal from './ObjectAdminModal';

function AdminModal({ delegateShowModal, handlerAdminModal, adminTypeModal }) {

    const dispatch = useDispatch()

    const [activeDropList, setAсtiveDropList] = useState(false)
    const [typesDropDown, setTypesDropDown] = useState('')
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
    const [limit, setLimit] = useState("")

    let visibleBody = null,
        visibleButton = null;

    const objProps = {
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
        setTypesDropDown([{ id: 1, name: 'type' }, { id: 2, name: 'brand' }])

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
            case 3:
                setModalTitle('Укажите лимит')
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
            { name: "secondSideImg", file: e.target.files[1] },
        ])
    }

    const handlerLimitSubmit = () => {
        dispatch(setCardLimit(Number(limit)))
        handlerAdminModal()
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
                setTypesDropDown={setTypesDropDown}
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
                objProps={objProps}
                selectedFile={selectedFile}
                selectedSideFiles={selectedSideFiles}
            />
            visibleButton = <button
                onClick={handlerSubmit}
                className="admin-modal__btn btn">Добавить</button>
            break;
        case 3:
            visibleBody = <ModalInput
                value={limit}
                callback={setLimit}
                type={"number"}
                name={"limit"}
                placeholder={"Укажите лимит"}
            />
            visibleButton = <button
                onClick={handlerLimitSubmit}
                className="admin-modal__btn btn">Добавить</button>
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
                {visibleButton}
            </div>

        </div>
    )
}

export default AdminModal
