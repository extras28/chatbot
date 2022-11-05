import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import HeaderLandingPage from '../HeaderLandingPage';
import './style.scss';
import AppResource from 'general/constants/AppResource';

BaseLayout.propTypes = {
    
};

function BaseLayout(props) {

    const PageUp = useRef();
    const handleScrollTop = () => {
        document.documentElement.scrollTop = 0;
    };
    window.onscroll = function () {
        if (PageUp.current) {
            PageUp.current.style.display =
                document.documentElement.scrollTop > 450 ? "block" : "none";
            PageUp.current.style.animation = "scroll-to-top-animation 0.5s";
        }
    };
    return (
        <div className='min-vh-100 bg-white'>
            {/* header */}
            <HeaderLandingPage />
            
            {/* Content */}
            <div
                className={`flex-grow-1 w-100 align-self-center d-flex flex-column justify-content-between`}
            >
                {props.children}
            </div>
            
            <div className="fixed-button">
                <button
                ref={PageUp}
                id="page-up-dashboard"
                style = {
                    {
                    marginBottom: "0px",
                    display: "none"
                    }
                }
                onClick={handleScrollTop}
                >
                <img src={AppResource.icons.icPageUp} alt="scroll to top button"/>
                </button>
            </div>
        </div>
    );
}

export default BaseLayout;