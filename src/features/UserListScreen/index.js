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
import Loading from "general/components/Loading";
import Empty from "general/components/Empty";
import AppResource from "general/constants/AppResource";

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
    // console.log(usersList);
    useEffect(() => {
        dispatch(thunkGetUsersList(filter));
    }, [filter]);
    return (
        <BaseLayout selected='users'>
            <div className='mx-3'>
                <BaseSearchBar
                    value={filter.q}
                    name='userFilter'
                    placeholder="Tìm kiếm người dùng"
                    onSubmit={(value) => {
                        setFilter({ ...filter, q: value });
                    }}
                />
            </div>
            <div className='row mt-8 mx-0'>
                {isGettingUsersList ? (
                    <div className='d-flex align-items-center justify-content-center'>
                        <Loading
                            showBackground={false}
                            message='Đang lấy dữ liệu'
                        />
                    </div>
                ) : usersList?.accounts?.length > 0 ? (
                    usersList?.accounts?.map((item, index) => {
                        if (item?.accountLevel !== "ADMIN") {
                            return (
                                <div
                                    key={index}
                                    className='UserListScreen_Cell col-12 col-md-6 col-lg-4 col-xl-3 mb-7 cursor-pointer'>
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
                        }
                    })
                ) : (
                    <div>
                        <Empty
                            text='Không có kết quả phù hợp'
                            buttonText='Làm mới'
                            visible={false}
                            imageEmpty={
                                AppResource.images.errorStates.noSearchFound
                            }
                        />
                    </div>
                )}
            </div>
        </BaseLayout>
    );
}

export default UserListScreen;
