const { default: axios } = require("axios");

const gptApi = {
  streamingChat: async (params) => {
    const url = " https://chat-dev.saymee.vn/api/v1/gpt/prompt";
    // const response = axios.post(url, params, {
    //   headers: {
    //     uuid: "123456",
    //   },
    // });
    const response = await axios({
      method: "post",
      url: url,
      responseType: "stream",
    })
    return response;
  },
};

export default gptApi;
