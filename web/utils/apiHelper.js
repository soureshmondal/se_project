import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // IMPORTANT for cookies/auth
});

// AUTH GET (token optional)
export const getAuth = async (url, token) => {
  try {
    const response = await API.get(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
};

// AUTH POST
export const postAuth = async (data, url, token) => {
  try {
    const response = await API.post(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
};

// NORMAL POST
export const post = async (data, url) => {
  try {
    const response = await API.post(url, data);
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
};

// NORMAL GET
export const get = async (url) => {
  try {
    const response = await API.get(url);
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
};

// AUTH PATCH
export const patchAuth = async (data, url, token) => {
  try {
    const response = await API.patch(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
};
