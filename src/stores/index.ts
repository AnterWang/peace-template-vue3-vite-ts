import { defineStore, createPinia } from "pinia";
import { GlobalState, ThemeConfigProps } from "./interface";
import { DEFAULT_PRIMARY } from "@/enums/config";
import piniaPersistConfig from "@/plugins/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	// state: 返回对象的函数
	state: (): GlobalState => ({
		// token
		token: "",
		// userInfo
		userInfo: "",
		// element组件大小
		assemblySize: "default",
		// themeConfig
		themeConfig: {
			// 布局切换 ==>  纵向：vertical | 经典：classic
			layout: "classic",
			// 默认 primary 主题颜色
			primary: DEFAULT_PRIMARY,
			// 深色模式
			isDark: false,
			// 灰色模式
			isGrey: false,
			// 色弱模式
			isWeak: false,
			// 折叠菜单
			isCollapse: false,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 页脚
			footer: false,
			// 当前页面是否全屏
			maximize: false
		}
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token;
		},
		// setUserInfo
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo;
		},
		// setAssemblySizeSize
		setAssemblySizeSize(assemblySize: string) {
			this.assemblySize = assemblySize;
		},
		// setThemeConfig
		setThemeConfig(themeConfig: ThemeConfigProps) {
			this.themeConfig = themeConfig;
		}
	},
	persist: piniaPersistConfig("GlobalState")
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
