import axiosClient from "./axiosClient";

const tagApi = {
    createTag: (params) => {
        const url = "/tag/create";
        return axiosClient.post(url, params);
    },
    getTags: (params) => {
        const url = "/tag/find";
        return axiosClient.get(url, { params });
    },
    getTagsListOfUser: (params) => {
        const url = "/tag/find-by-person";
        return axiosClient.get(url, { params });
    },
};

export default tagApi;
