import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import BaseSearchBar from "general/components/Form/BaseSearchBar";
import AppButton from "general/components/AppButton";
import Loading from "general/components/Loading";
import CellTag from "features/TagScreen/components/CellTag";
import Empty from "general/components/Empty";
import AppResource from "general/constants/AppResource";
import Global from "general/utils/Global";
import { Pagination } from "react-bootstrap";
import { parseInt } from "lodash";
import { thunkGetTagList } from "features/TagScreen/tagSlice";

AccounttagScreen.propTypes = {};

function AccounttagScreen(props) {
    const [filters, setFilters] = useState({
        q: "",
        page: 1,
        limit: Global.gDefaultPagination,
        sortByCreateTime: "",
    });
    const dispatch = useDispatch();
    const { tags, isGettingTags, paginationTags } = useSelector(
        (state) => state?.tag
    );

    // MARK: --- Hooks ---
    useEffect(() => {
        dispatch(thunkGetTagList(filters));
    }, [filters, dispatch]);
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-between align-items-center mx-4">
                <div className="max-w-250px">
                    <BaseSearchBar
                        value={filters.q}
                        name="tag-filter"
                        placeholder="Tìm kiếm..."
                        onSubmit={(value) => {
                            setFilters({ ...filters, q: value });
                        }}
                    />
                </div>
                <div>
                    <AppButton
                        className="btn-blue"
                        text="Thêm thẻ mới"
                    />
                </div>
            </div>
            <div className="row mt-8 mx-0">
                {isGettingTags ? (
                    <div className="d-flex align-items-center justify-content-center">
                        <Loading
                            showBackground={false}
                            message="Đang lấy dữ liệu"
                        />
                    </div>
                ) : tags?.length > 0 ? (
                    tags?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="col-12 col-md-4 col-lg-3 col-xl-2 mb-7 cursor-pointer"
                            >
                                <CellTag
                                    name={item?.name}
                                    description={item?.description}
                                    numberOfQuestion={item?.numberOfQuestion}
                                    questionPerWeek={item?.questionPerWeek}
                                    questionThisDay={item?.questionThisDay}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <Empty
                            text="Không có kết quả phù hợp"
                            buttonText="Làm mới"
                            visible={false}
                            imageEmpty={
                                AppResource.images.errorStates.noSearchFound
                            }
                        />
                    </div>
                )}
                <div>
                    <div className="d-flex align-items-center justify-content-center mt-0">
                        <Pagination
                            rowsPerPage={paginationTags.perPage}
                            rowCount={paginationTags.count ?? tags?.length}
                            currentPage={paginationTags.currentPage ?? 1}
                            onChangePage={(newPage) => {
                                let iNewPage = parseInt(newPage);
                                Global.g_needToRefreshTags = true;
                                setFilters({
                                    ...filters,
                                    page: iNewPage,
                                });
                            }}
                            onChangeRowsPerPage={(newPerPage) => {
                                const iNewPerPage = parseInt(newPerPage);
                                dispatch(setPaginationTagPerPage(iNewPerPage));
                                Global.g_needToRefreshTags = true;
                                setFilters({
                                    ...filters,
                                    page: 1,
                                    limit: iNewPerPage,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccounttagScreen;
