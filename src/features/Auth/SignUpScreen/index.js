import React from "react";
import PropTypes from "prop-types";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import imgRegister from "../../../assets/images/ImageRegister.png";
import "./style.scss";
SignUpScreen.propTypes = {};

function SignUpScreen(props) {
    return (
        <div>
            <HeaderLandingPage />
            <div className="container-fluid d-flex p-0 justify-content-center w-100vh">
                <div className="register-form">
                    <h2>Tham gia cộng đồng CodeHelper</h2>
                    <p>
                        Get more features and privileges by joining to the most
                        helpful community
                    </p>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control is-valid"
                            id="floatingInput"
                            placeholder="Tên đăng nhập"
                        />
                        <label for="floatingInput">Tên đăng nhập</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="email"
                            class="form-control is-invalid"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating  mb-3">
                        <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Mật khẩu"
                        />
                        <label for="floatingPassword">Mật khẩu</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Nhập lại mật khẩu"
                        />
                        <label for="floatingPassword">Nhập lại mật khẩu</label>
                    </div>
                    <p className="fw-bold text-danger ms-4 mb-3">Email đã được đăng ký!</p>
                    <button type="button" className="ButtonPrimary w-100">
                        ĐĂNG KÝ
                    </button>
                </div>
                <div className="d-md-none d-lg-block">
                    <img className="w-100" src={imgRegister} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SignUpScreen;
