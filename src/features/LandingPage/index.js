import React from 'react';
import PropTypes from 'prop-types';
// import NotFound from 'general/components/AppNotFound';
import HeaderLandingPage from 'general/components/HeaderLandingPage';
import FooterDashboard from 'general/components/Footer';


LandingPage.propTypes = {
    
};

function LandingPage(props) {
    return (
        <div className='min-vh-100'>
            <HeaderLandingPage />
            <div>
                landingpage
            </div>
            <FooterDashboard />
        </div>
    );
}

export default LandingPage;