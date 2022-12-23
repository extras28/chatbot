import React from "react";
import PropTypes from "prop-types";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import avatar from "../../assets/images/avatar.png";
import SideBar from "general/components/SideBar";
import "./style.scss";
import BaseLayout from "general/components/BaseLayout";

Profile.propTypes = {};

function Profile() {
  return (
    <div className="Profile">
      {/* <HeaderLandingPage loggedIn={true} /> */}
      <BaseLayout>
        <div className="container bg-white p-8">
          <div className="row d-flex flex-wrap">
            <div className="col-1">
              <img className="" src={avatar} alt="" />
            </div>
            <div className="col-8 ms-4 d-flex align-content-center flex-wrap">
              <div className="flex-grow-1 flex-wrap mx-2">
                <p className="fs-1 fw-bolder mb-2">Golanginya</p>
                <div className="fw-normal fs-6">
                  <div className="row">
                    <div className="col-sm-auto row">
                      <i className="fas fa-birthday-cake col-1"></i>
                      <p className="col">Member for 8 days</p>
                    </div>
                    <div className="col-sm-auto row">
                      <i className="fal fa-clock col-1"></i>
                      <p className="col">Last seen this week</p>
                    </div>
                    <div className="col-sm-auto row">
                      <i className="fas fa-birthday-cake col-1"></i>
                      <p className="col">Visited 4 days, 3 consecutive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col fw-light d-flex align-items-start justify-content-end">
              <button className="d-inline-flex p-2 rounded border-1 bg-white">
                <i className="fas fa-pencil me-2"></i>
                Edit profile
              </button>
            </div>
          </div>
          <div className="mt-5 ">
            <ul className="nav nav-pills">
              <li className="nav-item nav-tab">
                <a
                  className="nav-link rounded-pill active"
                  aria-current="page"
                  href="#"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded-pill" href="#">
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded-pill" href="#">
                  Saves
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded-pill" href="#" aria-disabled="true">
                  Settings
                </a>
              </li>
            </ul>
          </div>
  
          <div className="d-flex flex-wrap mt-5">
            <div className="col-3">
              <div className="fs-4">Stats</div>
              <div className="d-flex flex-wrap rounded-2 border p-3">
                <div className="col">
                  <p>1</p>
                  <p>reputation</p>
                </div>
                <div className="col">
                  <p>7</p>
                  <p>reached</p>
                </div>
                <div className="col">
                  <p>2</p>
                  <p>answers</p>
                </div>
                <div className="col">
                  <p>1</p>
                  <p>questions</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div className="fs-4">About</div>
                <div className="container d-flex align-items-center justify-content-center bg-light blank rounded-2 border">
                  <div>Your about me section is currently blank.</div>
                  <div>
                    Would you like to add one? <a href="#">Edit profile</a>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="fs-4">Badges</div>
                <div className="container d-flex align-items-center justify-content-center bg-light blank rounded-2 border">
                  You have not earned any  <a href="#"> badges</a> .
                </div>
              </div>
              {/* <div className="">
                <div className="fs-4">Post</div>
                <div className="container d-flex align-items-center justify-content-center bg-light text-wrap blank">
                  Just getting started? Try answering a question! Your most
                  helpful questions, answers and tags will appear here. Start by{" "}
                  <a href="#">answering a question</a> or{" "}
                  <a href="#">selecting tags</a> that match topics you’re
                  interested in.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
}

export default Profile;
