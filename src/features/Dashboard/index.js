import React from "react";
import PropTypes from "prop-types";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import SideBar from "general/components/SideBar";
import Argument from "general/components/Argument";
import "./style.scss";
import MiniProfile from "general/components/MiniProfile";

Dashboard.propTypes = {};

function Dashboard(props) {
    return (
        <div className='Dashboard'>
            <HeaderLandingPage loggedIn={true} />
            <div className=''>
                <SideBar />
                <div className='Dashboard_Content pt-10 row m-0 flex-row-reverse px-0'>
                    <div className='col-3'>
                        <MiniProfile />
                    </div>
                    <div className='col-7'>
                        <Argument />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
