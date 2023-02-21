import { defineStore } from "pinia";
import { AuthState } from "@/stores/interface";
import { getShowMenuList, getAllBreadcrumbList, getFlatArr } from "@/utils/util";
import { getRouterList } from "@/api/login";

// AuthStore
export const AuthStore = defineStore({
	id: "AuthState",
	state: (): AuthState => ({
		// 当前页面的 router name，用来做按钮权限筛选
		routeName: "",
		// 菜单权限列表
		authMenuList: [],
		// 按钮权限列表
		authButtonList: {},
	}),
	getters: {
		// 后端返回的菜单列表 ==> 这里没有经过任何处理
		authMenuListGet: state => state.authMenuList,
		// 按钮权限列表
		authButtonListGet: state => state.authButtonList,
		// 后端返回的菜单列表 ==> 左侧菜单栏渲染，需要去除 isHide == true
		showMenuListGet: state => getShowMenuList(state.authMenuList),
		// 扁平化之后的一维数组路由，主要用来添加动态路由
		flatMenuListGet: state => getFlatArr(state.authMenuList),
		// 所有面包屑导航列表
		breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList)
	},
	actions: {
		// 获取路由信息
		async getAuthMenuList() {
			const { data } = await getRouterList();
			// 过滤后端返回的路由
			const disposeRoute = (list: any) => {
				return list.map((item: any) => {
					const haveChildren = Array.isArray(item.children) && item.children.length > 0;
					return {
						...item,
						children: haveChildren ? disposeRoute(item.children) : [],
						// todo 
						// name: item.path.replace(/\//g, ''),
						// redirect ?
					}
				})
			}
			this.authMenuList = disposeRoute(data);
			console.log(this.authMenuList)
		},
		// getAuthButtonList
		async getAuthButtonList() {
			// const { data } = await getAuthButtonListApi();
			// this.authButtonList = data;
		},
		// setRouteName
		async setRouteName(name: string) {
			this.routeName = name;
		}
	}
});
