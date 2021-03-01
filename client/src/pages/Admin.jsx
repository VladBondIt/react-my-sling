import React from 'react';
import AdminModal from '../components/AdminModal/AdminModal';
import { useSelector, useDispatch } from 'react-redux';
import { setAdminModalType, setAdminModalShow } from '../redux/actions/modal';

function Admin() {


    const dispatch = useDispatch();

    const { adminModalShow, adminTypeModal } = useSelector((state) => ({
        adminModalShow: state.modal.adminModalShow,
        adminTypeModal: state.modal.adminTypeModal,
    }))

    const handlerAdminModal = () => {
        dispatch(setAdminModalShow(!adminModalShow))
    }
    const handlerTypeModal = () => {
        dispatch(setAdminModalType(0))
        dispatch(setAdminModalShow(!adminModalShow))
    }
    const handlerBrandModal = () => {
        dispatch(setAdminModalType(1))
        dispatch(setAdminModalShow(!adminModalShow))
    }
    const handlerObjectModal = () => {
        dispatch(setAdminModalType(2))
        dispatch(setAdminModalShow(!adminModalShow))
    }

    const delegateShowModal = (e) => {
        if (e.target.matches('.admin-modal')) {
            handlerAdminModal()
        }
    }

    return (
        <div className="admin mainbg">
            <div className="container">
                <div className="admin__title">Административная панель</div>

                <div
                    onClick={handlerTypeModal}
                    className="admin__row shd eff">Добавить Тип</div>
                <div
                    onClick={handlerBrandModal}
                    className="admin__row shd eff">Добавить Бренд</div>
                <div
                    onClick={handlerObjectModal}
                    className="admin__row shd eff">Добавить Объект</div>

                {adminModalShow && <AdminModal
                    adminTypeModal={adminTypeModal}
                    handlerAdminModal={handlerAdminModal}
                    delegateShowModal={delegateShowModal}
                />}
            </div>
        </div>
    )
}

export default Admin
