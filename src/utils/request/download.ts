import { ElMessage } from "element-plus";
import { saveAs } from 'file-saver'
import request from "@/utils/request";
import fullLoading from "@/plugins/fullLoading";

// 验证是否为blob格式
const blobValidate = async (data: any) => {
	try {
		const text = await data.text();
		JSON.parse(text);
		return false;
	} catch (error) {
		return true;
	}
}

// 导出、下载
export default (
	url: string = '',
	params: object = {},
	filename: string = 'filename.xlsx',
) => {
	fullLoading.show('正在下载数据，请稍候')
	return request({
		url,
		method: "post",
		params,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		responseType: 'blob'
	}).then(async (data: any) => {
		const result = await blobValidate(data);
		if (result) {
			const blob = new Blob([data])
			saveAs(blob, filename)
		} else {
			const resText = await data.text();
			const rspObj = JSON.parse(resText);
			const errMsg = rspObj.msg || '下载文件出现错误，请稍后重试！'
			ElMessage.error(errMsg);
		}
	}).catch((error) => {
		console.error(error)
		ElMessage.error('下载文件出现错误，请稍后重试！')
	}).finally(() => {
		fullLoading.hide();
	})
}
