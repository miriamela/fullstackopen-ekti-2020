import axios from "axios";

const baseUrl = "http://localhost:3003/api/blogs";
console.log(baseUrl);

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const updateLikes = async (id, newObject) => {
  const newUrl = `${baseUrl}/${id}`;
  console.log(newUrl);
  const response = await axios.put(newUrl, newObject);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: getAll,
  setToken: setToken,
  create: create,
  updateLikes: updateLikes,
};
