import axios from "axios";

// const BASE_URL = "https://api.escuelajs.co/api/v1/";
const BASE_URL = "http://localhost:8080/";

export const getAllProduct = async () => {
  try {
    const response = await axios.get(BASE_URL + "products/fetch");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get(BASE_URL + "categories/fetch");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const userLogin = async (email, password) => {
  try {
    const { data } = await axios.post(BASE_URL + "auth/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    return error;
  }
};
