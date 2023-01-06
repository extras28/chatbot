import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserHelper from "general/helpers/UserHelper";
import AppButton from "general/components/AppButton";

ModalChangeAvatar.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    onExecute: PropTypes.func,
};

ModalChangeAvatar.defaultProps = {
    show: null,
    onClose: null,
    onExecute: null,
};

function ModalChangeAvatar(props) {
    const { show, onClose, onExecute } = props;
    const { currentAccount } = useSelector((state) => state?.auth);
    const [editAvatar, setEditAvatar] = useState(null);
    function handleClose() {
        if (onClose) {
            onClose();
        }
    }
    function handleExecute() {
        if (onExecute) {
            onExecute();
        }
    }
    return (
        <Modal show={show} onHide={handleClose} centered size='md' className='p-0'>
            {/* modal header */}
            <Modal.Header className='d-flex align-items-center justify-content-center'>
                <Modal.Title>Chỉnh sửa ảnh đại diện</Modal.Title>
            </Modal.Header>

            {/* modal content */}
            <Modal.Body className='d-flex flex-column align-items-center justify-content-center bg-light py-10'>
                {!editAvatar ? (
                    <AppButton
                        className='btn-grey'
                        text='Tải ảnh lên'
                        beforIcon={<i className='fas fa-plus text-remaining mr-4'></i>}
                    />
                ) : (
                    <div className='symbol symbol-120 symbol-lg-150 symbol-fixed'>
                        <img
                            src={currentAccount?.avatar?.path || UserHelper.getRandomAvatarUrl()}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = UserHelper.getRandomAvatarUrl();
                            }}
                            alt='avatar'
                            className='border border-white border-4'
                            style={{
                                borderRadius: "20px",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                )}
            </Modal.Body>
            {/* modal footer */}
            <Modal.Footer className='d-flex flex-row align-items-center justify-content-center'>
                <div className='w-100 d-flex row'>
                    <Button className='font-weight-bold flex-grow-1 col mr-3' variant='secondary' onClick={handleClose}>
                        {`Huỷ`}
                    </Button>
                    <Button
                        className={`font-weight-bold flex-grow-1 col ml-3`}
                        variant='primary'
                        onClick={() => {
                            handleClose();
                            handleExecute();
                        }}>
                        Lưu thay đổi
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalChangeAvatar;
