import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { GlobalStore } from "@/stores";
import { LOGIN_URL } from "@/enums/config";
import router from "@/routers";
import { getFormDataHandle } from "./helper";

// 常量
const TIMEOUT: number = 6000; // 超时时间
const CODE_SUCCESS: number = 200; // 成功状态码

// axios config interface
interface axiosConfig extends AxiosRequestConfig {
	dataType?: string, // 数据类型 formData
}

// 创建axios实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL as string, // 默认地址请求地址，可在 .env 开头文件中修改
	timeout: TIMEOUT, // 设置超时时间
	withCredentials: true // 跨域时候允许携带凭证
})

// request拦截器
service.interceptors.request.use((config: axiosConfig) => {
	// config.header
	config.headers = { ...config.headers, "x-access-token": GlobalStore().token || '' } // 请求头添加token

	// config.data
	if (config.dataType === 'formData') { // 如果数据类型为 formData
		try {
			if (typeof config.data === 'object') {
				const _formdata = getFormDataHandle(config.data)
				config.data = _formdata
			}
		} catch (err) { }
	}

	return config;

}, (error: AxiosError) => {
	console.log(error)
	Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
	const { data } = response;
	const globalStore = GlobalStore();

	// * 登陆失效code === 401 / 40103
	if (data.code === 401) {
		ElMessage.error(data?.msg || '登录状态失效，请重新登陆');
		globalStore.setToken("");
		router.replace(LOGIN_URL); // 跳转到登录页
		return Promise.reject(data);
	}

	// 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
	if (data.code && data.code !== CODE_SUCCESS) {
		ElMessage.error(data?.msg);
		return Promise.reject(data);
	}

	// 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
	return data;

}, (error: AxiosError) => {
	console.log(error)
	const { response, message } = error;
	// 请求超时单独判断，因为请求超时没有 response
	if (message.indexOf("timeout") !== -1) {
		ElMessage.error(message || "请求超时！请您稍后重试");
	} else {
		// 根据响应的错误状态码，做不同的处理
		switch (response?.status) {
			case 400:
				ElMessage.error("请求失败！请您稍后重试");
				break;
			case 401:
				ElMessage.error("登录失效！请您重新登录");
				break;
			case 403:
				ElMessage.error("当前账号无权限访问！");
				break;
			case 404:
				ElMessage.error("你所访问的资源不存在！");
				break;
			case 500:
				ElMessage.error("服务异常！");
				break;
			case 502:
				ElMessage.error("网关错误！");
				break;
			case 503:
				ElMessage.error("服务不可用！");
				break;
			case 504:
				ElMessage.error("网关超时！");
				break;
			default:
				ElMessage.error("请求失败！");
		}
	}
	// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
	if (!window.navigator.onLine) router.replace("/500");

	return Promise.reject(error);
})

export default service
