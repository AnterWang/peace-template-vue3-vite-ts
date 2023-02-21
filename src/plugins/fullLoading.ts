import { ElLoading } from "element-plus";

/* 全局请求 loading(服务方式调用) */
let loadingInstance: ReturnType<typeof ElLoading.service>;

// 那么 showFullScreenLoading() tryHideFullScreenLoading() 要做的事就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0;
const showFullScreenLoading = (text: string) => {
	if (needLoadingRequestCount === 0) {
		loadingInstance = ElLoading.service({
			fullscreen: true,
			lock: true,
			text: text || "Loading...",
			background: "rgba(0, 0, 0, 0.7)"
		});
	}
	needLoadingRequestCount++;
};

const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
		loadingInstance.close();
	}
};

export default {
	show: (text: string) => {
		return showFullScreenLoading(text)
	},
	hide: () => {
		return tryHideFullScreenLoading()
	}
}
