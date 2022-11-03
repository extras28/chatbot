import React from 'react';
import PropTypes from 'prop-types';
import HeaderLandingPage from 'general/components/HeaderLandingPage';
import BaseTextField from 'general/components/Form/BaseTextField';
import DateRangePickerInput from 'general/components/Form/DateRangePickerInput';


SignInScreen.propTypes = {
    
};

function SignInScreen(props) {
    return (
        <div>
            <HeaderLandingPage />
            <DateRangePickerInput 
                format = 'DD/MM'
                className = 'mr-lg-4'
                getRange = {
                    (e) => console.log(e)
                }
            />
        </div>
    );
}

export default SignInScreen;