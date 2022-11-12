import React from 'react';
import PropTypes from 'prop-types';
import HeaderLandingPage from 'general/components/HeaderLandingPage';
import SideBar from 'general/components/SideBar';
import Argument from 'general/components/Argument';
import './style.scss'

Dashboard.propTypes = {
    
};

function Dashboard(props) {
    return (
        <div className='Dashboard'>
            <HeaderLandingPage loggedIn={false} />
            <div className=''>
                <SideBar loggedIn={false}/>
                <div className='Dashboard_Content pt-10'>
                    <Argument />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;