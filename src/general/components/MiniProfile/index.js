import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";
import AppResource from 'general/constants/AppResource';

MiniProfile.propTypes = {
    accountName : PropTypes.string,
    imgLink : PropTypes.string,
    numberFirst : PropTypes.string,
    numberSecond : PropTypes.string,
    githubLink : PropTypes.string,
    instagramLink : PropTypes.string,
    facebookLink : PropTypes.string,
};

MiniProfile.defaultProps = {
    accountName: "MiniProfile",
    imgLink: AppResource.images.imgDefaultAvatar,
    numberFirst: "125",
    numberSecond: "8",
    githubLink: "https://github.com",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com"
};

function MiniProfile(props) {
    const { accountName, imgLink, numberFirst, numberSecond, githubLink, instagramLink, facebookLink } = props
    return (
        <div className="miniprofile">
            <img src={imgLink} alt="MiniProfile" className="miniprofile-img"/>
            <h2 className="miniprofile-account">{accountName}</h2>
            <div className="miniprofile-line"></div>
            <div className="miniprofile-rank">
                <a href="#"><i className="fas fa-medal"></i></a>
                <p>{numberFirst} [{numberSecond}]</p>
            </div>
            <div className="miniprofile-line"></div>
            <div className="miniprofile-social">
                <a href={githubLink}><i className="fab fa-github"></i></a>
                <a href={instagramLink}><i className="fab fa-instagram"></i></a>
                <a href={facebookLink}><i className="fab fa-facebook-f"></i></a>
            </div>
        </div>
    )
}

export default MiniProfile;