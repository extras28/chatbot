const { default: axios } = require("axios");

const gptApi = {
  streamingChat: (params) => {
    const url = " https://chat-dev.saymee.vn/api/v1/gpt/prompt";
    const response = axios.post(url, params, {
      headers: {
        uuid: "123456",
      },
    });
    return response;
  },
};

export default gptApi;
