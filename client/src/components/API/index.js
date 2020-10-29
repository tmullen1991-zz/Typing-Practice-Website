import API from "../../utils/api";

export const getWordsApiAsync = () => {
  API.getWords().then((res) => {
    return res.data
  });
};
