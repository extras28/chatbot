import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

ModalEditQuestion.propTypes = {
    questionItem: PropTypes.object,
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

ModalEditQuestion.defaultProps = {
    questionItem: null,
    show: false,
    onClose: null,
};

function ModalEditQuestion(props) {
    // MARK: --- Params ---
    const { questionItem, show, onClose } = props;
    const [showing, setShowing] = useState(true);

    // MARK: --- Functions ---
    function handleClose() {
        if (onClose) {
            onClose();
        }
    }
    return (
        <div className='ModalEditQuestion'>
            <Modal
                className=''
                show={show && showing}
                size='lg'
                onHide={handleClose}
                centered
                onExited={() => {
                    // formik.handleReset();
                }}>
                {/* header */}
                <Modal.Header className='px-5 py-5 d-flex align-items-center justify-content-center position-relative'>
                    <Modal.Title className=''>Chỉnh sửa câu hỏi</Modal.Title>
                    <div
                        className='btn btn-xs btn-icon btn-light btn-hover-secondary cursor-pointer position-absolute right-0 mr-5'
                        onClick={handleClose}>
                        <i className='far fa-times'></i>
                    </div>
                </Modal.Header>
                {/* body */}
                <Modal.Body className='bg-light'>
                    <p>{questionItem?.title}</p>
                </Modal.Body>
                {/* footer */}
                <Modal.Footer>
                    <div className='w-100 d-flex row'>
                        <Button
                            className='font-weight-bold flex-grow-1 col mr-3 AppButton'
                            variant='secondary'
                            onClick={handleClose}>
                            {`Huỷ`}
                        </Button>
                        <Button
                            className={`font-weight-bold flex-grow-1 col ml-3 AppButton`}
                            variant='primary'
                            onClick={() => {
                                // handleClose();
                                formik.handleSubmit();
                            }}>
                            Lưu lại
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalEditQuestion;
