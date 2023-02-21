// import DynamicRouter from "@/mock/dynamicRouter.json"; // test路由
// import AuthButtons from "@/mock/authButtons.json"; // 按钮权限
import request from "@/utils/request/index";
import qs from "qs";
import { Router } from "@/mock/login.js"; // mock

// 用户登录
export const loginApi = data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ code: 200, msg: "成功", data: { access_token: "123123123" } });
		}, 1000);
	});
	return request({
		url: "/login",
		method: "post",
		data
	});
};

// 用户退出登录
export const logoutApi = () => {};

// 获取路由
export const getRouterList = data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Router);
		}, 1000);
	});
	return request({
		url: "/getlist",
		method: "post",
		data
	});
};
