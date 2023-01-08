import axiosClient from "./axiosClient";

const questionApi = {
    // get questions list
    getQuestionsList: (params) => {
        const url = '/question/find';
        return axiosClient.get(url, {params});
    },
    // create question
    createQuestion: (params) => {
        const url = '/question/create';
        return axiosClient.post(url, params);
    },
};

export default questionApi;
