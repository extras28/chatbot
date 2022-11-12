import React from 'react';
import PropTypes from 'prop-types';
import HeaderLandingPage from 'general/components/HeaderLandingPage';
import FooterDashboard from 'general/components/Footer';

CreateQuestionScreen.propTypes = {
    
};

function CreateQuestionScreen(props) {
    return (
        <div>
            <HeaderLandingPage />
            <div>
                question
            </div>
            <FooterDashboard />
        </div>
    );
}

export default CreateQuestionScreen;