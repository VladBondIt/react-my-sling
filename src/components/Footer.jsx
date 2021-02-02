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
                                <li className="footer__item"><a href="" className="footer__link link">Продукты</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Май Слинг</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Слинг с кольцом</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Слинг рюкзак</a></li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item"><a href="" className="footer__link link">О нас</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Компания</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Акции</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Отзывы клиентов</a></li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item"><a href="" className="footer__link link">Помощь</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">FAQ</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Полезные статьи</a></li>
                                <li className="footer__item"><a href="" className="footer__link link">Поддержка в Telegram</a>
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
                                    <a href="" className="footer__link link">bobaka@cobaka.ru
                            </a>
                                </li>
                                <div className="footer__social footer-social">
                                    <div className="footer-social__box">
                                        <a className="footer-social__link" href="">
                                            <VkSvg />
                                        </a>
                                        <a className="footer-social__link" href="">
                                            <FbSvg />
                                        </a>
                                        <a className="footer-social__link" href="">
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
