import React from 'react';
import PropTypes from 'prop-types';
import AccountLayout from 'features/Account/components/AccountLayout';
import BaseLayout from 'general/components/BaseLayout';
import { useSelector } from 'react-redux';

AccountProfile.propTypes = {
    
};

function AccountProfile(props) {
    // MARK --- Params ---
    const { currentAccount } = useSelector(state => state?.auth)
    return (
        <BaseLayout>
            <AccountLayout
                fullname={currentAccount?.fullname}
                email={currentAccount?.email}
                avatar={currentAccount?.avatar?.path}
            >
                
            </AccountLayout>
        </BaseLayout>
    );
}

export default AccountProfile;