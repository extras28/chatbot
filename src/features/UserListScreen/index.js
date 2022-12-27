import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import BaseLayout from "general/components/BaseLayout";
import SummaryUser from "general/components/SummaryUser";
import { thunkGetUsersList } from "./UsersListSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BaseSearchBar from "general/components/Form/BaseSearchBar";

UserListScreen.propTypes = {};
function UserListScreen(props) {
    const [filter, setFilter] = useState({
        q: "",
        page: 1,
        limit: 12,
    });
    const dispatch = useDispatch();
    const { isGettingUsersList, usersList } = useSelector(
        (state) => state?.user
    );
    console.log(usersList);
    useEffect(() => {
        dispatch(thunkGetUsersList(filter));
    }, [filter]);
    return (
        <BaseLayout selected="users">
            <BaseSearchBar
                value={filter.q}
                name="userFilter"
                onSubmit={(value) => {
                    setFilter({ ...filter, q: value });
                }}
            />
            <div className="row mt-8 g-0">
                {usersList?.accounts?.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-7">
                            <SummaryUser
                                avatar={item?.avatar?.path}
                                userName={item.fullname}
                                job={item.job}
                                email={item.email}
                                address={item.address}
                                phone={item.phone}
                            />
                        </div>
                    );
                })}
            </div>
        </BaseLayout>
    );
}

export default UserListScreen;
