import React, { useState } from "react";
import PropTypes from "prop-types";
import BaseLayout from "general/components/BaseLayout";
import AppButton from "general/components/AppButton";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { ImageMDIcon } from "assets/icons/Icons";
import * as Yup from "yup";
import UserHelper from "general/helpers/UserHelper";
import { useSelector } from "react-redux";
import "./style.scss";
import DialogModal from "general/components/DialogModal";
import { useRef } from "react";
import axios from "axios";
import { useFormik } from "formik";

CreateQuestionScreen.propTypes = {};

function CreateQuestionScreen(props) {
    const { isSigningIn, currentAccount } = useSelector((state) => state?.auth);
    const [titleQuestion, setTitleQuestion] = useState("");
    const [imgQuestion1, setImgQuestion1] = useState(null);
    const [tags, setTags] = useState([]);
    const [showPreviewQuestion, setShowPreviewQuestion] = useState(false);
    const [showResetQuestionModal, setShowResetQuestionModal] = useState(false);

    // const Clickkk = useRef(null);

    const handleShowPreviewQuestion = () => {
        setShowPreviewQuestion(!showPreviewQuestion);
        document.documentElement.scrollTop = 0;
    };

    const uploadPhotoHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "WebTechnology");

        try {
            //   setPictureProfile("./assets/img/giphy.gif");
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dc7pxknio/upload",
                formData
            );
            if (res) {
                console.log(res);
                setImgQuestion1(res.data.secure_url);
            } //   console.log(imgQuestion1);
            //   setPictureProfile(res.data.url);
        } catch (error) {}
    };

    // const handleResetQuestion = () => {
    //     setTitleQuestion("");
    //     setTags("");
    //     setContentTextProblem("");
    //     setContentTextExpect("");
    //     document.documentElement.scrollTop = 0;
    // };

    const formik = useFormik({
        initialValues: {
            title: "",
            contentTextProblem: "",
            contentTextExpect: "",
        },
        onSubmit: async (values) => {
            const params = { ...values };
            console.log(params);
        },
        // validationSchema: Yup.object({
        //     email: Yup.string().trim().required('Bạn chưa nhập email').email('Email không hợp lệ'),
        //     password: Yup.string().trim().required('Bạn chưa nhập mật khẩu'),
        // }),
    });

    return (
        <div className="position-relative">
            <BaseLayout selected="questions">
                <div className="container">
                    <h1>Đặt câu hỏi</h1>
                    <div className="d-flex flex-column mt-5 p-7 p-lg-10 border-1 bg-white shadow-sm rounded">
                        <h4>Hướng dẫn các bước:</h4>
                        <ul>
                            <li className="mt-2 fs-5">
                                Tóm tắt vấn đề của bạn trong tiêu đề một dòng.
                            </li>
                            <li className="mt-2 fs-5">
                                Mô tả vấn đề của bạn chi tiết hơn.
                            </li>
                            <li className="mt-2 fs-5">
                                Mô tả những gì bạn đã cố gắng và những gì bạn
                                mong đợi sẽ xảy ra.
                            </li>
                            <li className="mt-2 fs-5">
                                Thêm “thẻ” giúp hiển thị câu hỏi của bạn cho các
                                thành viên của cộng đồng.
                            </li>
                            <li className="mt-2 fs-5">
                                Xem lại câu hỏi của bạn và đăng nó lên trang
                                web.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex flex-column mt-5 p-7 p-lg-10 border-1 bg-white shadow-sm rounded">
                        <div className="fs-5 fw-bold mb-3">Tiêu đề</div>
                        <div>
                            <input
                                type="text"
                                className="InputTitle"
                                value={titleQuestion}
                                onChange={(e) => {
                                    setTitleQuestion(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* <input type="file" className="d-none" ref={Clickkk} onChange={(e) => uploadPhotoHandler(e)}/> */}
                <div className="container">
                    <div className="d-flex flex-column mt-5 p-7 p-lg-10 border-1 bg-white shadow-sm rounded">
                        <div className="fs-5 fw-bold mb-3">
                            Chi tiết vấn đề của bạn là gì?
                        </div>
                        <MDEditor
                            height={300}
                            preview="edit"
                            //extraCommands={[]}
                            value={
                                formik.getFieldProps("contentTextProblem").value
                            }
                            onChange={(e) =>
                                formik
                                    .getFieldHelpers("contentTextProblem")
                                    .setValue(e)
                            }
                            commands={[
                                commands.bold,
                                commands.italic,
                                commands.hr,
                                commands.divider,
                                commands.link,
                                commands.code,
                                commands.codeBlock,
                                commands.image,
                                // image1,
                                commands.group([], {
                                    name: "image",
                                    groupName: "image",
                                    icon: <ImageMDIcon />,
                                    children: (handle) => {
                                        return (
                                            <div
                                                style={{
                                                    padding: 10,
                                                }}
                                            >
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlFile1">
                                                            Ảnh
                                                        </label>
                                                        <input
                                                            type="file"
                                                            // ref={Clickkk}
                                                            onChange={(e) => {
                                                                uploadPhotoHandler(
                                                                    e
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </form>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handle.close()
                                                    }
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handle.execute()
                                                    }
                                                >
                                                    Execute
                                                </button>
                                            </div>
                                        );
                                    },

                                    execute: (state, api) => {
                                        // Clickkk.current.click();
                                        console.log("onExe:", state);
                                        //   let imageProblemUrl = await upload_image(contentImageExpect);
                                        let modifyText = `![](${state.text})\n`;
                                        api.replaceSelection(modifyText);
                                    },
                                    buttonProps: {
                                        "aria-label": "Insert image",
                                    },
                                }),
                                commands.divider,
                                commands.unorderedListCommand,
                                commands.orderedListCommand,
                            ]}
                        />
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex flex-column mt-5 p-7 p-lg-10 border-1 bg-white shadow-sm rounded">
                        <div className="fs-5 fw-bold mb-3">
                            Bạn đã thử những gì và bạn đang mong đợi điều gì?
                        </div>
                        <MDEditor
                            height={300}
                            preview="edit"
                            //extraCommands={[]}
                            commands={[
                                commands.bold,
                                commands.italic,
                                commands.hr,
                                commands.divider,
                                commands.link,
                                commands.code,
                                commands.codeBlock,
                                commands.divider,
                                commands.unorderedListCommand,
                                commands.orderedListCommand,
                            ]}
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex flex-column mt-5 p-7 p-lg-10 border-1 bg-white shadow-sm rounded">
                        <div className="fs-5 fw-bold mb-3">Thẻ</div>
                        <div>
                            <input
                                type="text"
                                className="InputTag"
                                value={tags}
                                onChange={(e) => {
                                    setTags(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center mt-5">
                        <AppButton
                            className="ButtonPrimary me-5"
                            onClick={handleShowPreviewQuestion}
                        >
                            Xem trước câu hỏi của bạn
                        </AppButton>
                        <AppButton
                            className="ButtonSecondary"
                            onClick={() => setShowResetQuestionModal(true)}
                        >
                            Hủy bản nháp
                        </AppButton>
                    </div>
                </div>
            </BaseLayout>
            {showPreviewQuestion && (
                <div
                    className="position-absolute top-0 w-100 h-100"
                    style={{
                        zIndex: "1002",
                        backgroundColor: " rgba(0, 0, 0, .5)",
                    }}
                >
                    <div
                        className="my-20 mx-5 mx-sm-10 mx-md-15 mx-lg-auto bg-white rounded p-5 p-md-10"
                        style={{ maxWidth: "800px" }}
                    >
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img
                                    className="header-avatar rounded-circle"
                                    src={
                                        currentAccount.avatar ||
                                        UserHelper.getRandomAvatarUrl()
                                    }
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            UserHelper.getRandomAvatarUrl();
                                    }}
                                    alt="avatar"
                                />
                            </div>
                            <div className="flex-grow-1 mx-2">
                                <div className="fw-bold fs-5 my-0">
                                    {currentAccount.fullname}
                                </div>
                                <div className="fw-normal fs-6">02-01-2023</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="fw-bold fs-3">{titleQuestion}</div>
                        </div>
                        <MDEditor.Markdown
                            source={
                                formik.getFieldProps("contentTextProblem").value
                            }
                            style={{ padding: 15 }}
                        />
                        <MDEditor.Markdown style={{ padding: 15 }} />
                        <div className="container">
                            <div className="d-flex justify-content-center mt-5">
                                <AppButton
                                    className="ButtonPrimary me-5"
                                    width="10rem"
                                    onClick={() => formik.handleSubmit()}
                                >
                                    Đăng câu hỏi
                                </AppButton>
                                <AppButton
                                    className="ButtonSecondary"
                                    width="10rem"
                                    onClick={handleShowPreviewQuestion}
                                >
                                    Đóng
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <DialogModal
                show={showResetQuestionModal}
                onClose={() => setShowResetQuestionModal(false)}
                icon="fas fa-trash-alt text-danger"
                title="Hủy bản nháp"
                description="Bạn có chắc chắn hủy bản nháp?"
                // onExecute={handleResetQuestion}
            />
        </div>
    );
}

export default CreateQuestionScreen;
