import { list, addAndEdit, roleTreeEdit } from "@/mock/auth/role";
import request from "@/utils/request/index";
import download from "@/utils/request/download";

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

export const getRoleTreeEdit = data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(roleTreeEdit);
		}, 1000);
	});
	return request({
		url: "/getlist",
		method: "post",
		data
	});
};

// 导出
export const exportData = data => {
	return download("/getlist", {}, "name.xlsx");
};
