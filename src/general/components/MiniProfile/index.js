import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";

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
    imgLink: "https://www.w3schools.com/howto/img_avatar2.png",
    numberFirst: "125",
    numberSecond: "8",
    githubLink: "https://github.com",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com"
};

function MiniProfile({props}) {
    console.log(props);
    return (
        <div className="miniprofile">
            <img src={props.imgLink} alt="MiniProfile" className="miniprofile-img"/>
            <h2 className="miniprofile-account">{props.accountName}</h2>
            <div className="miniprofile-line"></div>
            <div className="miniprofile-rank">
                <a href=""><i className="fas fa-medal"></i></a>
                <p>{props.numberFirst} [{props.numberSecond}]</p>
            </div>
            <div className="miniprofile-line"></div>
            <div className="miniprofile-social">
                <a href={props.githubLink}><i className="fab fa-github"></i></a>
                <a href={props.instagramLink}><i className="fab fa-instagram"></i></a>
                <a href={props.facebookLink}><i className="fab fa-facebook-f"></i></a>
            </div>
        </div>
    )
}

export default MiniProfile;