import React from 'react';
import AdminModal from '../components/AdminModal/AdminModal';
import { useSelector, useDispatch } from 'react-redux';
import { setModalShow } from '../redux/actions/modal';

function Admin() {


    const dispatch = useDispatch();

    const { modalShow, } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
    }))

    const handlerAdminModal = () => {
        dispatch(setModalShow(!modalShow))
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
                    onClick={handlerAdminModal}
                    className="admin__row shd eff">Добавить Тип</div>
                <div className="admin__row shd eff">Добавить Бренд</div>
                <div className="admin__row shd eff">Добавить Объект</div>

                {modalShow && <AdminModal
                    handlerAdminModal={handlerAdminModal}
                    delegateShowModal={delegateShowModal}
                />}
            </div>
        </div>
    )
}

export default Admin
