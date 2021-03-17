import React from 'react';
import { ReactComponent as VkSvg } from '../../assets/images/svg/header-vk.svg';
import { ReactComponent as InstaSvg } from '../../assets/images/svg/header-instagram.svg';
import { ReactComponent as FbSvg } from '../../assets/images/svg/header-facebook.svg';
import HeaderNav from './HeaderNav';
import { useSelector, useDispatch } from 'react-redux';
import { setModalShow, setModalType } from '../../redux/actions/modal';


function Header() {


    const dispatch = useDispatch();

    const { modalShow, isHomePage } = useSelector((state) => ({
        modalShow: state.modal.modalShow,
        isHomePage: state.page.isHomePage,
    }))

    const handlerOfferCallModal = () => {
        dispatch(setModalShow(!modalShow))
        dispatch(setModalType(2))
    }


    return (
        <header className="header">
            {isHomePage
                ?
                <div className="header__background">
                    <div className={modalShow ? "container open" : "container"}>
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
        </header >

    )
}

export default Header;

