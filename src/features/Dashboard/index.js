import React from "react";
import PropTypes from "prop-types";
import SummaryQuestion from "general/components/SummaryQuestion";
import "./style.scss";
import MiniProfile from "general/components/MiniProfile";
import BaseLayout from "general/components/BaseLayout";
import Tag from "general/components/Tag";
import { useDispatch } from "react-redux";
import { thunkGetQuestionsList } from "app/questionSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BaseSearchBar from "general/components/Form/BaseSearchBar";

Dashboard.propTypes = {};

function Dashboard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [questionsList, setQuestionsList] = useState([]);
    // const [search, setSearch] = useSearchParams();
    // const searchTag = search.get('tag') || '';
    // const searchTab = search.get('tab') || '';
    // console.log("Tag: " + searchTag);
    // console.log("Tab: " + searchTab);
    useEffect(async () => {
        try {
            const res = unwrapResult(await dispatch(thunkGetQuestionsList()));
            setQuestionsList(res);
        } catch (error) {
            console.log(`error: ${error.message}`);
        }
    }, []);

    return (
        <BaseLayout selected="Câu hỏi">
            <div>
                <h1>Câu hỏi</h1>
                {/* <div className="d-flex align-items-center">
                    Được gắn với thẻ
                    <Tag tagName="javascript" className="bg-white shadow-sm" />
                </div> */}
                <div className="d-flex justify-content-between align-items-center">
                    <div>{questionsList.length} câu hỏi</div>
                    {/* <button className="FilterButton p-2 rounded ">
                        <i className="fas fa-filter ms-2"></i>
                        Filter
                    </button> */}
                </div>
                {/* <form className="FilterWrapper row">
                    <div className="col-4">
                        <div>Lọc theo</div>
                        <div>Chưa có câu trả lời</div>
                    </div>
                    <div className="col-4">
                        <div>Sắp xếp theo</div>
                        <ul>
                            <li>Mới nhất</li>
                            <li>Đánh giá</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div>Gắn với thẻ</div>
                        <BaseSearchBar placeholder="VD: javascript" />
                    </div>
                </form> */}
            </div>
            <div>
                <SummaryQuestion
                    avatar="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                    userName="Golanginya"
                    createAt="12 November 2020 19:35"
                    titleQuestion="How to patch KDE on FreeBSD?"
                    tags={["java", "php", "javascript"]}
                    comments="15"
                    likes="100"
                    dislikes="4"
                />
                {questionsList.map((question) => (
                    <div key={question._id}>
                        <SummaryQuestion
                            avatar={question.account.avatar}
                            userName={question.account.fullname}
                            createAt={question.updatedAt}
                            titleQuestion={question.title}
                            tags={["java", "php", "javascript"]}
                            comments="15"
                            likes="100"
                            dislikes="4"
                        />
                    </div>
                ))}
            </div>
        </BaseLayout>
    );
}

export default Dashboard;
