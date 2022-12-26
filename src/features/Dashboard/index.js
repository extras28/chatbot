import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import SummaryQuestion from "general/components/SummaryQuestion";
import "./style.scss";
import MiniProfile from "general/components/MiniProfile";
import BaseLayout from "general/components/BaseLayout";
import { thunkGetQuestionsList } from "./dashboardSlice";
import { useEffect } from "react";
import Utils from "general/utils/Utils";
import BaseSearchBar from "general/components/Form/BaseSearchBar";
import { useState } from "react";

Dashboard.propTypes = {};

function Dashboard(props) {
    const [filter, setFilter] = useState({
        q: "",
        page: 1,
        limit: 20
    })
    const dispatch = useDispatch();
    const {isGettingQuestionsList, questionsList} = useSelector(state => state?.question); 
    // console.log(questionsList);
    useEffect(() => {
        dispatch(thunkGetQuestionsList(filter));
    }, [filter]);
    return (
        <BaseLayout selected="questions">
            <BaseSearchBar value={filter.q} name="questionFilter" onSubmit={(value) => {
                setFilter({...filter, q:value})
            }}/>
            <div>
                {questionsList?.questions?.map((item, index) =>{
                    return (
                        <SummaryQuestion
                        key={index}
                        avatar={item.account.avatar.path}
                        userName={item.account.fullname}
                        createAt={Utils.formatDateTime("2022-12-16T12:53:37.484Z")}
                        titleQuestion={item.title}
                        tags={["C", "PHP", "Javascript"]}
                        comments="15"
                        likes={item.like}
                        dislikes={item.dislike}
                />
                    )
                })}
            </div>
        </BaseLayout>
    );
}

export default Dashboard;
