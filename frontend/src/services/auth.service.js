import axios from "axios";

const API_URL = "http://192.168.51.78:5000/api/auth/";

const register = (name, username, email, password, authority) => {
  return axios.post(API_URL + "signup", {
    name,
    username,
    email,
    password,
    authority
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
