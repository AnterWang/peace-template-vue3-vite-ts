import { list, addAndEdit } from "@/mock/auth/user";
import request from "@/utils/request/index";

// 获取列表
export const getList = data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(list);
		}, 1000);
	});
	return request({
		url: "/getlist",
		method: "post",
		data
	});
};

// 新增用户
export const updateEdit = data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(addAndEdit);
		}, 1000);
	});
	return request({
		url: "/getlist",
		method: "post",
		data
	});
};

// 删除用户
export const delUser = data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(addAndEdit);
		}, 1000);
	});
	return request({
		url: "/getlist",
		method: "post",
		data
	});
};
