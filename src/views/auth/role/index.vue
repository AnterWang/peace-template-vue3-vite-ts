<template>
	<div class="table-box">
		<ProTable ref="proTable" title="用户列表" :columns="columns" row-key="id" :requestApi="getTableList">
			<!-- 表格 header 按钮 -->
			<template #tableHeader="scope">
				<el-button type="primary" plain icon="Plus" @click="handleAdd('新增')">新增</el-button>
				<el-button type="danger" plain icon="Delete" @click="handleBatchDel">删除</el-button>
				<el-button type="warning" plain icon="Download" @click="handleExport">导出</el-button>
			</template>
			<!-- 状态 -->
			<template #state="scope">
				<el-switch v-model="scope.row.state" active-value="0" inactive-value="1"
					@change="handleStatusChange(scope.row)"></el-switch>
			</template>
			<!-- 表格操作 -->
			<template #operation="scope">
				<el-button type="primary" link :icon="Edit" @click="handleAdd('编辑', scope.row)">修改</el-button>
				<el-button type="primary" link :icon="Delete" @click="handleDel(scope.row)">删除</el-button>
				<el-button type="primary" link :icon="Key" @click="handleChange(scope.row)">分配用户</el-button>
			</template>
		</ProTable>
		<!-- 新增-->
		<AddDrawer ref="addDrawer" />
		<!-- 分配用户 -->
		<ChangeDrawer ref="changeDrawer" />
	</div>
</template>

<script setup name="RoleIndex">
import { computed, ref, defineAsyncComponent, getCurrentInstance } from "vue"
import { CircleCheck, Delete, Edit, Key } from "@element-plus/icons-vue"
// 组件
import ProTable from "@/components/ProTable/index.vue"
import AddDrawer from "./components/addDrawer.vue"
import ChangeDrawer from "./components/changeDrawer.vue"
// api
import { getList, delUser } from '@/api/auth/role.js'

const { proxy } = getCurrentInstance()

// table
const proTable = ref()
// 可扩展传入参数
const getTableList = (params) => {
	let newParams = { ...params }
	return getList(newParams)
}
// 表格配置项
const columns = [
	{ type: "selection", fixed: "left", width: 80 },
	{ prop: "roleId", label: "角色编号" },
	{ prop: "roleName", label: "角色名称", search: { el: "input" } },
	{ prop: "roleKey", label: "权限字符" },
	{ prop: "roleSort", label: "显示顺序", search: { el: "input" } },
	{ prop: "state", label: "状态" },
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

// 分配用户
const changeDrawer = ref()
const handleChange = (row) => {
	console.log(row)
	changeDrawer.value.show(row)
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

// 导出
const handleExport = () => {

}

</script>

<style scoped lang="scss">

</style>
