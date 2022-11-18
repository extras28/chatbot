import React from "react";
import PropTypes from "prop-types";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import SideBar from "general/components/SideBar";
import Argument from "general/components/Argument";
import "./style.scss";
import MiniProfile from "general/components/MiniProfile";
import BaseLayout from "general/components/BaseLayout";

Dashboard.propTypes = {};

function Dashboard(props) {
    return (
        <BaseLayout>
            <div>
                <Argument />
                <Argument />
                <Argument />
                <Argument />
                <Argument />
                <Argument />
                <Argument />
                <Argument />
                <Argument />
                <Argument />
            </div>
        </BaseLayout>
    );
}

export default Dashboard;
