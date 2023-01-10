import DetailQuestion from "features/Question/Component/DetailQuestion";
import { thunkGetDetailQuestion } from "features/Question/questionSlice";
import BaseLayout from "general/components/BaseLayout";
import Loading from "general/components/Loading";
import PreferenceKeys from "general/constants/PreferenceKey";
import Utils from "general/utils/Utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

QuestionDetailScreen.propTypes = {};

function QuestionDetailScreen(props) {
    const dispatch = useDispatch();
    const { isGettingDetailQuestion, detailQuestion } = useSelector(
        (state) => state?.question
    );
    const id = localStorage.getItem(PreferenceKeys.questionId);
    useEffect(() => {
        if (id) {
            dispatch(thunkGetDetailQuestion({ _id: id }));
        }
    }, [id]);

    console.log(detailQuestion);
    return (
        <BaseLayout selected="questions">
            <div className="container-xxl">
                <div>
                    {isGettingDetailQuestion ? (
                        <div className="d-flex align-items-center justify-content-center mt-8">
                            <Loading
                                showBackground={false}
                                message="Đang lấy dữ liệu"
                            />
                        </div>
                    ) : detailQuestion ? (
                        <DetailQuestion
                            avatar={detailQuestion?.account?.avatar?.path}
                            fullname={detailQuestion?.account?.fullname}
                            createdAt={Utils.formatDateTime(
                                detailQuestion?.createdAt,
                                "DD-MM-YYYY"
                            )}
                            title={detailQuestion.title}
                            contentTextProblem={
                                detailQuestion.contentTextProblem
                            }
                            contentTextExpect={detailQuestion.contentTextExpect}
                            tags={["C", "PHP", "Javascript"]}
                            comments="15"
                            likes={0}
                            dislikes={0}
                        />
                    ) : (
                        <div className="mt-8">
                            <Empty
                                text="Không có kết quả phù hợp"
                                buttonText="Làm mới"
                                visible={false}
                                imageEmpty={
                                    AppResource.images.errorStates.noMatchFound
                                }
                            />
                        </div>
                    )}
                    <div>
                        <h1>Câu trả lời</h1>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

export default QuestionDetailScreen;
