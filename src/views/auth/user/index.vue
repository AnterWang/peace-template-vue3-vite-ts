<template>
	<div class="table-box">
		<ProTable ref="proTable" title="用户列表" :columns="columns" row-key="id" :requestApi="getList">
			<!-- 表格 header 按钮 -->
			<template #tableHeader="scope">
				<el-button type="primary" plain icon="Plus" @click="handleAdd('新增')">新增</el-button>
				<el-button type="danger" plain icon="Delete" @click="handleBatchDel">删除</el-button>
				<el-button type="info" plain icon="Upload" @click="handleImport">导入</el-button>
				<el-button type="warning" plain icon="Download" @click="handleExport">导出</el-button>
			</template>
			<!-- 状态 -->
			<template #status="scope">
				<el-switch v-model="scope.row.status" active-value="0" inactive-value="1"
					@change="handleStatusChange(scope.row)"></el-switch>
			</template>
			<!-- 表格操作 -->
			<template #operation="scope">
				<el-button type="primary" link :icon="Edit" @click="handleAdd('编辑', scope.row)">修改</el-button>
				<el-button type="primary" link :icon="Delete" @click="handleDel(scope.row)">删除</el-button>
				<el-button type="primary" link :icon="Key" @click="handleChangePwd(scope.row)">重置密码</el-button>
				<el-button type="primary" link :icon="CircleCheck" @click="handleChangeRole(scope.row)">分配角色</el-button>
			</template>
		</ProTable>
		<!-- 新增 -->
		<AddDrawer ref="addDrawer" />
		<!-- 分配角色 -->
		<ChangeRole ref="changeRole" />
	</div>
</template>

<script setup name="UserIndex">
import { computed, ref, defineAsyncComponent, getCurrentInstance } from "vue"
import { CircleCheck, Delete, Edit, Key } from "@element-plus/icons-vue"
// 组件
import ProTable from "@/components/ProTable/index.vue"
import AddDrawer from "./components/addDrawer.vue"
import ChangeRole from "./components/changeRole.vue"
// api
import { getList, delUser } from '@/api/auth/user.js'

const { proxy } = getCurrentInstance()

// table
const proTable = ref()
const requestCallback = (data) => {
	return {
		data: data.rows,
		...data
	}
}
// 表格配置项
const columns = [
	{ type: "selection", fixed: "left", width: 80 },
	{ prop: "userId", label: "用户编号" },
	{ prop: "userName", label: "用户名称", search: { el: "input" } },
	{ prop: "nickName", label: "用户昵称" },
	{ prop: "phonenumber", label: "手机号码", search: { el: "input" } },
	{ prop: "status", label: "状态" },
	{ prop: "createTime", label: "创建时间", search: { el: "date-picker", type: "daterange" } },
	{ prop: "operation", label: "操作", width: 340 }
]

// 新增、编辑
const addDrawer = ref()
const handleAdd = (title, form = {}) => {
	let params = {
		title,
		form,
		getList: proTable.value.getTableList
	}
	addDrawer.value.acceptParams(params)
}

// 删除
const handleDel = (row) => {
	proxy.$message.confirm(`确认删除吗？`)
		.then(async () => {
			const res = await delUser({ id: row.id })
			// todo.....
			proTable.value.getTableList()
			proxy.$message.success("删除成功")
		})
		.catch(() => { })
}

// 修改密码
const handleChangePwd = (row) => {
	proxy.$message.prompt('请输入"' + row.userName + '"的新密码', "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		closeOnClickModal: false,
		inputPattern: /^.{5,20}$/,
		inputErrorMessage: "用户密码长度必须介于 5 和 20 之间",
	}).then(({ value }) => {
		console.log(value)
		// todo .......
		// api(row.userId, row.loginName, value).then((response) => {
		// 	proxy.$message.success("修改成功")
		// })
	}).catch(() => { })
}

// 分配角色
const changeRole = ref()
const handleChangeRole = () => {
	changeRole.value.show()
}

// 切换状态
const handleStatusChange = () => {

}

// 批量删除
const handleBatchDel = () => {
	const rows = proTable.value.element.getSelectionRows()
	if (!rows.length) return proxy.$message.error('请至少选中一行')
	console.log(rows)
	// todo.........
}

// 导入
const handleImport = () => {

}

// 导出
const handleExport = () => {

}

</script>

<style scoped lang="scss">

</style>
