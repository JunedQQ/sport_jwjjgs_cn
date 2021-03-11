import { message as Msg } from "antd";
import axios from "axios";

axios.defaults.baseURL = "https://upes.legym.cn/";
axios.defaults.headers.post["Content-Type"] =
  "application/json;; charset=utf-8";
axios.interceptors.request.use((config) => {
  if ("post" === config.method.toLowerCase() && typeof config.data === "object")
    config.data = JSON.stringify(config.data);
  const token = localStorage.getItem("token");
  if (token) config.headers.authorization = token;
  return config;
});
axios.interceptors.response.use((res) => {
  const {
    data: { code, message, data },
  } = res;
  if (code !== 0) {
    Msg.warning(message || "未知原因");
    return Promise.reject();
  }
  if (message) Msg.success(message);
  return data;
});
