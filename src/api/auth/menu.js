import request from "@/utils/request/index";
import { tree } from "@/mock/auth/menu";

// 获取系统列表
export const getList = data => {
	return new Promise((resolve, rejects) => {
		setTimeout(() => {
			resolve(tree);
		}, 1000);
	});
	return request({
		url: "/getlist",
		method: "post",
		data
	});
};
