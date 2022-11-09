import React from 'react';
import PropTypes from 'prop-types';
import EmptyView from 'general/components/EmptyView';
import HeaderLandingPage from 'general/components/HeaderLandingPage';
import SideBar from 'general/components/SideBar';
import Argument from 'general/components/Argument';

Dashboard.propTypes = {
    
};

function Dashboard(props) {
    return (
        <div>
            <HeaderLandingPage loggedIn={true} />
            <div className=''>
                <SideBar />
                <div className='ml-50'>
                    <Argument />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;