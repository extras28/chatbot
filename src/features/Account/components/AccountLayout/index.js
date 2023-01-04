import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";

AccountLayout.propTypes = {
    children: PropTypes.element,
    fullname: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
};

AccountLayout.defaultProps = {
    children: <></>,
    fullname: "",
    email: "",
    avatar: "",
};

function AccountLayout(props) {
    // MARK --- Params ---
    const { children, fullname, email, avatar } = props;
    return (
        <div className='AccountLayout flex-column-fluid'>
            <div className='container-xxl'>
                {/* account navbar */}
                <div className='card card-flush mb-9'>
                    <div
                        class='card-header rounded-top bgi-size-cover h-200px AccountLayout_CoverImage'
                        style={{
                            backgroundPosition: "100% 50%",
                            backgroundImage:
                                "url('https://preview.keenthemes.com/keen/demo1/assets/media/misc/profile-head-bg.jpg')",
                        }}></div>
                    <div className='card-body mt-n19'>
                        <div className='m-0'>
                            <div className='d-flex flex-stack align-items-end pb-4 mt-n19'>
                                <div className='symbol symbol-120 symbol-lg-150 symbol-fixed position-relative mt-n3'>
                                    <img
                                        src={
                                            avatar ||
                                            UserHelper.getRandomAvatarUrl()
                                        }
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                UserHelper.getRandomAvatarUrl();
                                        }}
                                        alt='avatar'
                                        className='border border-white border-4'
                                        style={{ borderRadius: "20px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="font-weight-bolder font-size-h3 text-remaining">{fullname}</p>
                                <p className="text-muted">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default AccountLayout;
