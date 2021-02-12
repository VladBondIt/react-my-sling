import React from 'react';
import { ReactComponent as Logo } from '../assets/images/svg/logo.svg';
import { ReactComponent as VkSvg } from '../assets/images/svg/footer-vk.svg';
import { ReactComponent as FbSvg } from '../assets/images/svg/facebook-foot.svg';
import { ReactComponent as InstaSvg } from '../assets/images/svg/instagram-footer.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__row">
                        <div className="footer__column">
                            <div className="footer__logo logo">
                                <Logo className="logo__svg" />
                                Helenia
                            </div>
                            <div className="footer__copyright">
                                © Все права защищены 2021,
                                Helenia Company
                            </div>
                        </div>
                        <div className="footer__column">
                            <ul className="footer__list">
                                <li className="footer__item"><button className="footer__link link">Продукты</button></li>
                                <li className="footer__item"><button className="footer__link link">Май Слинг</button></li>
                                <li className="footer__item"><button className="footer__link link">Слинг с кольцом</button></li>
                                <li className="footer__item"><button className="footer__link link">Слинг рюкзак</button></li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item"><button className="footer__link link">О нас</button></li>
                                <li className="footer__item"><button className="footer__link link">Компания</button></li>
                                <li className="footer__item"><button className="footer__link link">Акции</button></li>
                                <li className="footer__item"><button className="footer__link link">Отзывы клиентов</button></li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item"><button className="footer__link link">Помощь</button></li>
                                <li className="footer__item"><button className="footer__link link">FAQ</button></li>
                                <li className="footer__item"><button className="footer__link link">Полезные статьи</button></li>
                                <li className="footer__item"><button className="footer__link link">Поддержка в Telegram</button>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <ul className="footer__contacts">
                                <li className="footer__item">Наши Контакты</li>
                                <li className="footer__item">
                                    <a href="tel:+78009998877" className="footer__link link">8-800-999-88-77
                            </a>
                                </li>
                                <li className="footer__item">
                                    <button className="footer__link link">bobaka@cobaka.ru
                            </button>
                                </li>
                                <div className="footer__social footer-social">
                                    <div className="footer-social__box">
                                        <button className="footer-social__link" >
                                            <VkSvg />
                                        </button>
                                        <button className="footer-social__link" >
                                            <FbSvg />
                                        </button>
                                        <button className="footer-social__link" >
                                            <InstaSvg />
                                        </button>
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
