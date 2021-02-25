import React from 'react';
import { ReactComponent as Logo } from '../assets/images/svg/logo.svg';
import { ReactComponent as VkSvg } from '../assets/images/svg/footer-vk.svg';
import { ReactComponent as FbSvg } from '../assets/images/svg/facebook-foot.svg';
import { ReactComponent as InstaSvg } from '../assets/images/svg/instagram-footer.svg';
import FooterMenu from './FooterMenu';
import { setInnerWidth } from '../redux/actions/width';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHomePage } from '../redux/actions/page';

function Footer() {
    const dispatch = useDispatch();
    const { innerWidth, } = useSelector(state => ({
        innerWidth: state.width.innerWidth
    }))

    React.useEffect(() => {
        dispatch(setInnerWidth(window.innerWidth))
        window.onresize = () => {
            dispatch(setInnerWidth(window.innerWidth))
        }
    }, []);

    const handlerLinkToHome = () => {
        dispatch(setHomePage(true))
    }

    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__row">
                        <div className="footer__column">
                            <Link
                                onClick={handlerLinkToHome}
                                to="/react-my-sling/">
                                <div className="footer__logo logo">
                                    <Logo className="logo__svg" />
                                    Helenia
                                </div>
                            </Link>
                            <div className="footer__copyright">
                                © Все права защищены 2021,
                                Helenia Company
                            </div>
                        </div>
                        {innerWidth >= 540 ? <FooterMenu /> : null}
                        <div className="footer__column">
                            <ul className="footer__contacts">
                                <li className="footer__item">Наши Контакты</li>
                                <li className="footer__item">
                                    <a href="tel:+78009998877" className="footer__link link">8-800-999-88-77
                            </a>
                                </li>
                                <li className="footer__item">
                                    <div className="footer__link link">
                                        bobaka@cobaka.ru
                                    </div>
                                </li>
                                <div className="footer__social footer-social">
                                    <div className="footer-social__box">
                                        <a href="a" className="footer-social__link" >
                                            <VkSvg />
                                        </a>
                                        <a href="a" className="footer-social__link" >
                                            <FbSvg />
                                        </a>
                                        <a href="a" className="footer-social__link" >
                                            <InstaSvg />
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
