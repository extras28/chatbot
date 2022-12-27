import axiosClient from "./axiosClient";

const questionApi = {
    // get questions list
    getQuestionsList: (params) => {
        const url = '/question/find';
        return axiosClient.get(url, {params});
    },
};

export default questionApi;
