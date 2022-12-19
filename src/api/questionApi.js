import axiosClient from "./axiosClient";

const questionApi = {
    // get questions list
    getQuestionsList: () => {
        const url = '/question/find';
        return axiosClient.get(url);
    },
};

export default questionApi;
