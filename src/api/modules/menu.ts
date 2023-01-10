import http from "@/api";
import mockMenu from "@/mock/menu/mockMenu.json"; // mock路由

// 获取系统列表
export const getList = (params: { pageNum: number; pageSize: number }) => {
	// return http.post(`/system/list`, params);
	return new Promise((resolve, rejects) => {
		resolve(mockMenu)
	})
};
