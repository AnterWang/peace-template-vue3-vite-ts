import message from './message'
import fullLoading from './fullLoading'

export default function installPlugins(app: any) {
	// 消息
	app.config.globalProperties.$message = message
	// 全屏loading
	app.config.globalProperties.$loading = fullLoading
}
