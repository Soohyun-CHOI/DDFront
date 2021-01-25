import axios from "axios";
// import { get_header } from "./config";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
});

export const cookieApi = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
  withCredentials: true,
});

export const postApi = async (url, data) => {
  try {
    const token = localStorage.getItem("DD_access");
    const headers = token ? { Authorization: `Bearer ${token}` } : null;
    await api.post(url, data, { headers });
  } catch (err) {
    // console.log("postApi error: " + err);
    throw err;
  }
};

export const putApi = async (url, data) => {
  try {
    const token = localStorage.getItem("DD_access");
    const headers = token ? { Authorization: `Bearer ${token}` } : null;
    await api.put(url, data, { headers });
  } catch (err) {
    // console.log("putApi error: " + err);
    throw err;
  }
};

export const deleteApi = async (url) => {
  try {
    const token = localStorage.getItem("DD_access");
    await api.delete(url, { headers: { Authorization: `Bearer ${token}` } });
  } catch (err) {
    console.log("deleteApi error: " + err);
    throw err;
  }
};

export const getApi = async (url) => {
  try {
    const token = localStorage.getItem("DD_access");
    const headers = token ? { Authorization: `Bearer ${token}` } : null;
    const response = await api.get(url, { headers });
    return response.data;
  } catch (err) {
    // console.log("getApi error: " + err);
    throw err;
  }
};

// export const pageApi = async (url, page = 1) => {
//   try {
//     let address = `${url}?page=${page}`;
//     if (url.includes("?")) {
//       address = `${url}&page=${page}`;
//     }
//     const token = localStorage.getItem("DD_access");
//     const headers = token ? { Authorization: `Bearer ${token}` } : null;
//     const response = await api.get(address, { headers });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

// export const searchApi = async (url, page = 1, search = "") => {
//   try {
//     let address = "";
//     if (search) {
//       if (url.includes("?")) {
//         address = `${url}&page=${page}&search=${search}`;
//       } else {
//         address = `${url}?page=${page}&search=${search}`;
//       }
//     } else {
//       if (url.includes("?")) {
//         address = `${url}&page=${page}`;
//       } else {
//         address = `${url}?page=${page}`;
//       }
//     }
//     const token = localStorage.getItem("DD_access");
//     const headers = token ? { Authorization: `Bearer ${token}` } : null;
//     const response = await api.get(address, { headers });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

// export const paraApi = async (url, para) => {
//   try {
//     let paraString = "";
//     if (para != null) {
//       Object.keys(para).forEach(function (key) {
//         paraString = paraString + "&" + `${key}=${para[key]}`;
//       });
//       paraString = paraString.substring(1);
//     }
//     const address = `${url}?${paraString}`;
//     const headers = get_header();
//     const response = await api.get(address, { headers });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

export const socialProfileSubmit = async (
  nickname,
  email,
  isConsentingEmail,
  token
) => {
  const response = await api.post(
    "api/v1/users/my_profile/",
    { email, nickname, isConsentingEmail },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
