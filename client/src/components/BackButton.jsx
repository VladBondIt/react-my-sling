import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as CardBack } from '../assets/images/svg/back-button.svg';
import { useDispatch } from 'react-redux';
import { setHomePage } from '../redux/actions/page';


function BackButton({ className }) {


    const dispatch = useDispatch();

    const handlerLinkToHome = () => {
        dispatch(setHomePage(true))
    }

    return (
        <>
            <Link
                onClick={handlerLinkToHome}
                className={className}
                to="/react-my-sling/">
                <CardBack className="cart__backsvg" /> Вернуться
            </Link>
        </>
    )
}

// 

export default BackButton;
