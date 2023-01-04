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

CreateQuestionScreen.propTypes = {};
const image1 = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: <ImageMDIcon />,
    execute: async (state, api) => {
        // const [contentImageProblem, setContentImageProblem] = useState('');

        let imageProblemUrl =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBF0O5cZra6tQslwXgRl9ZwMoeDX0rInpbcQ&usqp=CAU";
        //   let imageProblemUrl = await upload_image(contentImageProblem);

        let modifyText = `![](${imageProblemUrl})\n`;
        api.replaceSelection(modifyText);
    },
};
const image2 = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: <ImageMDIcon />,
    execute: async (state, api) => {
        // OPEN my component.

        // const [contentImageExpect, setContentImageExpect] = useState('');

        let imageExpectUrl =
            "https://topdev.vn/blog/wp-content/uploads/2019/04/huong-dan-doc-code-1024x556.png";
        //   let imageExpectUrl = await upload_image(contentImageExpect);
        let modifyText = `![](${imageExpectUrl})\n`;
        api.replaceSelection(modifyText);
    },
};
const mkdStr = `
**Hello world!!!**

\`\`\`jsx
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;

function CreateQuestionScreen(props) {
    const { isSigningIn, currentAccount } = useSelector((state) => state?.auth);
    const [titleQuestion, setTitleQuestion] = useState("");
    const [tags, setTags] = useState([]);
    const [contentTextProblem, setContentTextProblem] = useState(mkdStr);
    const [contentTextExpect, setContentTextExpect] = useState(mkdStr);
    const [showPreviewQuestion, setShowPreviewQuestion] = useState(false);
    const [showResetQuestionModal, setShowResetQuestionModal] = useState(false);
    const [contentImageProblem, setContentImageProblem] = useState('');
    function handleChange(e) {
        console.log(e.target.files);
        setContentImageProblem(URL.createObjectURL(e.target.files[0]));
    }
    const handleShowPreviewQuestion = () => {
        setShowPreviewQuestion(!showPreviewQuestion);
        document.documentElement.scrollTop = 0;
    };

    const handleResetQuestion = () => {
        setTitleQuestion("");
        setTags("");
        setContentTextProblem("");
        setContentTextExpect("");
        document.documentElement.scrollTop = 0;
    };
    // validationSchema: Yup.object({
    //     title: Yup.string().trim().required("Bạn chưa nhập tiêu đề"),
    // });
    
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
                <div className="container">
                    <div className="d-flex flex-column mt-5 p-7 p-lg-10 border-1 bg-white shadow-sm rounded">
                        <div className="fs-5 fw-bold mb-3">
                            Chi tiết vấn đề của bạn là gì?
                        </div>
                        <MDEditor
                            height={300}
                            preview="edit"
                            //extraCommands={[]}
                            value={contentTextProblem}
                            onChange={setContentTextProblem}
                            commands={[
                                commands.bold,
                                commands.italic,
                                commands.hr,
                                commands.divider,
                                commands.link,
                                commands.code,
                                commands.codeBlock,
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
                                                            className="form-control-file"
                                                             id="exampleFormControlFile1"
                                                            onChange={handleChange}
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
                                        // let imageProblemUrl =
                                        //     "https://topdev.vn/blog/wp-content/uploads/2019/04/huong-dan-doc-code-1024x556.png";
                                        //   let imageProblemUrl = await upload_image(contentImageExpect);
                                        let modifyText = `![](${contentImageProblem})\n`;
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
                            value={contentTextExpect}
                            onChange={setContentTextExpect}
                            commands={[
                                commands.bold,
                                commands.italic,
                                commands.hr,
                                commands.divider,
                                commands.link,
                                commands.code,
                                commands.codeBlock,
                                image2,
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
                            source={contentTextProblem}
                            style={{ padding: 15 }}
                        />
                        <MDEditor.Markdown
                            source={contentTextExpect}
                            style={{ padding: 15 }}
                        />
                        <div className="container">
                            <div className="d-flex justify-content-center mt-5">
                                <AppButton
                                    className="ButtonPrimary me-5"
                                    width="10rem"
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
                onExecute={handleResetQuestion}
            />
        </div>
    );
}

export default CreateQuestionScreen;
