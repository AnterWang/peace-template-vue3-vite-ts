import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

// 封装element常用的消息提示，挂载到vue组件
// 通过以下方式调用 const { proxy } = getCurrentInstance();  proxy.$message.xxx

export default {
	// 消息提示
	info(content: string) {
		ElMessage.info(content)
	},
	// 错误消息
	error(content: string) {
		ElMessage.error(content)
	},
	// 成功消息
	success(content: string) {
		ElMessage.success(content)
	},
	// 警告消息
	warning(content: string) {
		ElMessage.warning(content)
	},
	// 弹出提示
	alert(content: string, title: string = "提示") {
		ElMessageBox.alert(content, title)
	},
	// 通知提示
	notify(content: string, type: string = "info") {
		if (type === "error") {
			ElNotification.error(content)
		} else if (type === "success") {
			ElNotification.success(content)
		} else if (type === "warning") {
			ElNotification.warning(content)
		} else {
			ElNotification.info(content)
		}
	},
	// 确认窗体
	confirm(content: string, title: string = "提示") {
		return ElMessageBox.confirm(content, title, {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: "warning",
		})
	},
	// 提交内容
	prompt(content: string, title: string = "提示", params: object = {}) {
		return ElMessageBox.prompt(content, title, {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: "warning",
			...params
		})
	},
}
