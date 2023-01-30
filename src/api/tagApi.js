import axiosClient from "./axiosClient";

const tagApi = {
    getTags: (params) => {
        const url = "/tag/find";
        return axiosClient.get(url, { params });
    },
    getTagsByAccount: (params) => {
        const url = "/tag/find-by-person";
        return axiosClient.get(url, { params });
    },
};

export default tagApi;
