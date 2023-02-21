import { ElMessage } from "element-plus";

// 获取formdata数据
export const getFormDataHandle = (data: any) => {
	const _formdata = new FormData()
	for (let key in data) {
		if (typeof data[key] === 'object' && data[key] !== null) {
			_formdata.append(key, JSON.stringify(data[key]))
		} else if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
			_formdata.append(key, data[key])
		}
	}
	return _formdata
}
