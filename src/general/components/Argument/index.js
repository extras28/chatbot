import React from "react";
import PropTypes from "prop-types";
import avatar from "../../../assets/images/avatar.png";
import "./style.scss";

Argument.propTypes = {};

function Argument(props) {
  return (
    <div>
      <div class="comment p-5 container-sm bg-body shadow-sm rounded">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <img className="header-avatar" src={avatar} alt="" />
          </div>
          <div class="flex-grow-1 mx-2">
            <p class="fw-bold fs-5 my-0">@Golanginya</p>
            <p class="fw-normal fs-6">12 November 2020 19:35</p>
          </div>
          <div class="flex-grow-0">
                {/* icon more */}
          </div>
        </div>
        <div class="content">
          <p class="fw-bold fs-2">How to patch KDE on FreeBSD?</p>
          <p class="fw-lighter fs-5">Something went wrong</p>
          <code class="my-3 fs-6">
            {`
                #include<stdio.h>
                int main() {
                    printf("Hello World");
                }
            `}
          </code>
          <p class="fw-lighter fs-5">I need your help</p>
        </div>
        <div class="d-flex">
          <div class="flex-shrink-0">
            <span class="badge rounded-pill bg-light text-secondary">C</span>
          </div>
          <div class="flex-grow-1 ms-2">
            <span class="badge rounded-pill bg-light text-secondary">
              Beginners
            </span>
          </div>
          <div class="flex-grow-0 button rounded-pill">
            <button class="btn text-white" type="submit"> Vote
              {/* icon up Vote */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Argument;
