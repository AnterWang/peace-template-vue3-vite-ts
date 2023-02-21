import { createRouter, createWebHistory } from "vue-router";
import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";
import { LOGIN_URL } from "@/enums/config";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { staticRouter, errorRouter } from "@/routers/modules/staticRouter";
import NProgress from "@/plugins/nprogress";

/**
 * @description 动态路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单（非必填）
 * @param meta.isLink ==> 是否外链 （默认：空）
 * @param meta.isHide ==> 是否隐藏 （默认：false）
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面) （默认：false）
 * @param meta.isAffix ==> 是否固定在 tabs nav （默认：false）
 * @param meta.isKeepAlive ==> 是否缓存 （默认：true）
 * */
const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter, ...errorRouter],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	const globalStore = GlobalStore();

	// 1.NProgress 开始
	NProgress.start();

	// 2.动态设置标题
	document.title = import.meta.env.VITE_GLOB_APP_TITLE;

	// 3.如果是访问登陆页，没有 token 直接放行，有 token 就在当前页
	if (to.path === LOGIN_URL) {
		if (!globalStore.token) return next();
		else return next(from.fullPath);
	}

	// 4.判断是否有 Token，没有重定向到 login
	if (!globalStore.token) return next(LOGIN_URL);

	// 5.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	const authStore = AuthStore();
	authStore.setRouteName(to.name as string);
	if (!authStore.authMenuListGet.length) {
		await initDynamicRouter();
		return next({ ...to, replace: true });
	}

	// 6.正常访问页面
	next();
});

/**
 * @description 重置路由
 * */
export const resetRouter = () => {
	const authStore = AuthStore();
	authStore.flatMenuListGet.forEach(route => {
		const { name } = route;
		if (name && router.hasRoute(name)) router.removeRoute(name);
	});
};

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	NProgress.done();
	console.warn("路由错误", error.message);
});

export default router;
