import React from 'react';
import { ReactComponent as VkSvg } from '../../assets/images/svg/header-vk.svg';
import { ReactComponent as InstaSvg } from '../../assets/images/svg/header-instagram.svg';
import { ReactComponent as FbSvg } from '../../assets/images/svg/header-facebook.svg';
import HeaderNav from './HeaderNav';
import { useSelector, useDispatch } from 'react-redux';
import { setModalShow, setModalType } from '../../redux/actions/modal';
import Modal from '../Modal/Modal';

import httpService from '../../services/httpService';


function Header() {


    const dispatch = useDispatch();

    const { modalShow, typeModal, isHomePage } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        typeModal: state.modal.typeModal,
        isHomePage: state.page.isHomePage,
    }))

    const handlerOfferCallModalShow = () => {
        dispatch(setModalShow(!modalShow))
    }

    const handlerOfferCallModal = () => {
        handlerOfferCallModalShow()
        dispatch(setModalType(2))
    }

    const test = () => {
        httpService.check().then((res) => {
            console.log(res.token);
        })
    }


    return (
        <header className="header">
            {isHomePage
                ?
                <div className="header__background">
                    <div className="container">
                        <HeaderNav />
                        <div className="header__content">
                            <div className="header__row">
                                <h2 className="header__text header__text_left">Мы с радостью ответим на любые ваши вопросы</h2>
                                <h2 className="header__text header__text_right">Только лучшие и проверенные товары для вас
                                и ваших деточек!</h2>
                            </div>
                            <div className="header__row">
                                <div className="header__social social">
                                    <ul className="social__list">
                                        <li className="social__item"><div className="social__link">
                                            <VkSvg className="social__svg social__svg_vk btn" />
                                        </div></li>
                                        <li className="social__item"><div className="social__link">
                                            <InstaSvg className="social__svg social__svg_insta btn" />
                                        </div></li>
                                        <li className="social__item"><div className="social__link">
                                            <FbSvg className="social__svg social__svg_facebook btn" />
                                        </div></li>
                                    </ul>
                                </div>
                                <div className="header__button">
                                    <button
                                        onClick={handlerOfferCallModal}
                                        className="button btn shd">Заказать</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                :
                <div className="header__notmain">
                    <div className="container">
                        <HeaderNav />
                    </div>
                </div>}
            {modalShow && <Modal
                handlerOfferCallModalShow={handlerOfferCallModalShow}
                typeModal={typeModal} />}
        </header >

    )
}

export default Header;

