import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/images/icon.png";

FooterDashboard.propTypes = {};

function FooterDashboard(props) {
  return (
    <div class="bg-white py-5">
      <div class="container py-5">
        <footer class="py-5">
          <div class="row">
            <div class="col-4 offset-1">
              <div className="d-flex align-items-end fs-5 fw-normal ">
                <img className="me-3" src={logo} alt="" />
                <div className="d-none d-sm-flex">
                  Code<div className="fw-bolder">Helper</div>
                </div>
              </div>
            </div>
            <div class="col-2">
              <h5>About</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-2">
              <h5>
                <strong>POLICIES</strong>
              </h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Legal
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Terms of Service
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Cookie Settings
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-2">
              <h5>
                <strong>CHANNELS</strong>
              </h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Blog
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Podcast
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    NewsLetter
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Twitter
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Facebook
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FooterDashboard;
